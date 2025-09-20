import { UsersService } from './users.service';
import type { Request } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(req: Request): Express.User | undefined;
    discover(req: {
        user?: {
            id?: string;
        };
    }, lat: string, lon: string, gender?: string, radius?: string, page?: string, limit?: string): Promise<({
        profile: {
            id: string;
            userId: string;
            avatarPhotoId: string | null;
            gender: string | null;
            bio: string | null;
            city: string | null;
            country: string | null;
            lat: number | null;
            lon: number | null;
            university: string | null;
            degree: string | null;
            major: string | null;
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
                id: string;
                name: string;
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
}
