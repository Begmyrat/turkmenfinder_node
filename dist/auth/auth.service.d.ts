import { SignUpDto, SignInDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        email: string | null;
        username: string;
        id: string;
        passwordHash: string | null;
        isActive: boolean;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    validateUserById(userId: string): Promise<{
        email: string | null;
        username: string;
        id: string;
        passwordHash: string | null;
        isActive: boolean;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    } | null>;
    signUp(dto: SignUpDto): Promise<{
        token: string;
        user: {
            email: string | null;
            username: string;
            id: string;
            passwordHash: string | null;
            isActive: boolean;
            isVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
    }>;
    signIn(dto: SignInDto): Promise<{
        token: string;
        user: {
            email: string | null;
            username: string;
            id: string;
            passwordHash: string | null;
            isActive: boolean;
            isVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
    }>;
}
