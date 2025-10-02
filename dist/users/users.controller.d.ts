import { UsersService } from './users.service';
import { EditProfileDto } from './dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(req: {
        user?: {
            id?: string;
        };
    }): Promise<{
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
    discover(req: {
        user?: {
            id?: string;
        };
    }, page?: string, limit?: string): Promise<({
        interests: ({
            interest: {
                name: string;
                id: string;
            };
        } & {
            userId: string;
            interestId: string;
        })[];
        photos: {
            id: string;
            createdAt: Date;
            userId: string;
            s3Key: string;
            ordering: number;
        }[];
        profile: {
            gender: string | null;
            gender_looking_for: string | null;
            birthday: Date | null;
            lat: number | null;
            lon: number | null;
            city: string | null;
            country: string | null;
            bio: string | null;
            university: string | null;
            degree: string | null;
            major: string | null;
            id: string;
            userId: string;
            avatarPhotoId: string | null;
        } | null;
    } & {
        email: string | null;
        username: string;
        id: string;
        passwordHash: string | null;
        isActive: boolean;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    })[]>;
    editProfile(req: {
        user?: {
            id?: string;
        };
    }, dto: EditProfileDto): Promise<{
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
}
