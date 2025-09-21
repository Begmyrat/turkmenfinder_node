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
        interests: ({
            interest: {
                name: string;
                id: string;
            };
        } & {
            interestId: string;
            userId: string;
        })[];
        photos: {
            id: string;
            createdAt: Date;
            s3Key: string;
            ordering: number;
            userId: string;
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
            avatarPhotoId: string | null;
            userId: string;
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
