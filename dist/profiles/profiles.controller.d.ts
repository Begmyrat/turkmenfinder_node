import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private readonly service;
    constructor(service: ProfilesService);
    findByUserId(userId: string): import("@prisma/client").Prisma.Prisma__ProfileClient<{
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
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
