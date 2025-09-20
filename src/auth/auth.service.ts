import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignUpDto, SignInDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as argon2 from 'argon2';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user || !user.passwordHash)
      throw new BadRequestException('User not found');
    const isMatch: boolean = await argon2.verify(password, user.passwordHash);
    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }
    return user;
  }

  async validateUserById(userId: string) {
    return await this.usersService.findById(userId);
  }

  async signUp(dto: SignUpDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) throw new BadRequestException('Email already in use');

    const hashedPassword = await argon2.hash(dto.password);

    // Create user and profile
    const user = await this.usersService.createUserWithProfile({
      ...dto,
      password: hashedPassword,
    });

    if (!user) {
      throw new BadRequestException('User creation failed');
    } else if (!user.id || !user.email) {
      throw new UnauthorizedException('Invalid user data');
    }

    return this.signToken(user.id, user.email);
  }

  async signIn(dto: SignInDto) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user || !user.passwordHash)
      throw new UnauthorizedException('Invalid credentials');

    const valid = await argon2.verify(user.passwordHash, dto.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    if (!user.id || !user.email) {
      throw new UnauthorizedException('Invalid user data');
    }
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get<string>('JWT-SECRET');
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
