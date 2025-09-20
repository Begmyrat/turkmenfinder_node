import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private readonly service;
    constructor(service: ProfilesService);
    findByUserId(userId: string): import("@prisma/client").Prisma.Prisma__ProfileClient<{
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
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
