import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
