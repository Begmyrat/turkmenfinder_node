import { UsersService } from './users.service';
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
    }, lat: string, lon: string, gender?: string, radius?: string, page?: string, limit?: string): Promise<({
        profile: {
            id: string;
            gender: string | null;
            bio: string | null;
            lat: number | null;
            lon: number | null;
            university: string | null;
            degree: string | null;
            major: string | null;
            gender_looking_for: string | null;
            city: string | null;
            country: string | null;
            birthday: Date | null;
            avatarPhotoId: string | null;
            userId: string;
        } | null;
        photos: {
            id: string;
            createdAt: Date;
            s3Key: string;
            ordering: number;
            userId: string;
        }[];
        interests: ({
            interest: {
                name: string;
                id: string;
            };
        } & {
            interestId: string;
            userId: string;
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
}
