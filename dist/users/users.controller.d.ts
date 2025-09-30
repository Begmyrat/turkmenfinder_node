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
    discover(req: {
        user?: {
            id?: string;
        };
    }, page?: string, limit?: string): Promise<({
        profile: {
            id: string;
            userId: string;
            avatarPhotoId: string | null;
            gender: string | null;
            gender_looking_for: string | null;
            bio: string | null;
            city: string | null;
            country: string | null;
            lat: number | null;
            lon: number | null;
            university: string | null;
            degree: string | null;
            major: string | null;
            birthday: Date | null;
        } | null;
        photos: {
            id: string;
            createdAt: Date;
            userId: string;
            s3Key: string;
            ordering: number;
        }[];
        interests: ({
            interest: {
                name: string;
                id: string;
            };
        } & {
            userId: string;
            interestId: string;
        })[];
    } & {
        id: string;
        username: string;
        email: string | null;
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
}
