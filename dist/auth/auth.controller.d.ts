import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
