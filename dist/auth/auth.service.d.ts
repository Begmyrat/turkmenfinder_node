import { SignUpDto, SignInDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly config;
    constructor(usersService: UsersService, jwtService: JwtService, config: ConfigService);
    validateUser(email: string, password: string): Promise<{
        id: string;
        username: string;
        email: string | null;
        passwordHash: string | null;
        isActive: boolean;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    validateUserById(userId: string): Promise<{
        id: string;
        username: string;
        email: string | null;
        passwordHash: string | null;
        isActive: boolean;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    } | null>;
    signUp(dto: SignUpDto): Promise<{
        access_token: string;
        user_id: string;
    }>;
    signIn(dto: SignInDto): Promise<{
        access_token: string;
        user_id: string;
    }>;
    signToken(userId: string, email: string): Promise<{
        access_token: string;
        user_id: string;
    }>;
}
