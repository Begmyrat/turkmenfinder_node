import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignUpDto, SignInDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

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
    }

    // Generate JWT
    const token = this.jwtService.sign({ userId: user.id });
    return { token, user };
  }

  async signIn(dto: SignInDto) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user || !user.passwordHash)
      throw new UnauthorizedException('Invalid credentials');

    const valid = await argon2.verify(user.passwordHash, dto.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    const token = this.jwtService.sign({ userId: user.id });
    return { token, user };
  }
}
