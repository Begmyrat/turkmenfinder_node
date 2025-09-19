import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    discover(req: {
        user?: {
            id?: string;
        };
    }, lat: string, lon: string, gender?: string, radius?: string, page?: string, limit?: string): Promise<({
        interests: ({
            interest: {
                id: string;
                name: string;
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
}
