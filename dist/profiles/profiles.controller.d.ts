import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private readonly service;
    constructor(service: ProfilesService);
    findByUserId(userId: string): import("@prisma/client").Prisma.Prisma__ProfileClient<{
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
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
