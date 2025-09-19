import { SignUpDto, SignInDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signUp(dto: SignUpDto): Promise<{
        token: string;
        user: {
            id: string;
            username: string;
            email: string | null;
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
            id: string;
            username: string;
            email: string | null;
            passwordHash: string | null;
            isActive: boolean;
            isVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
    }>;
}
