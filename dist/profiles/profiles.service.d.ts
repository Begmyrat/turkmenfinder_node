import { PrismaService } from '../prisma/prisma.service';
export declare class ProfilesService {
    private prisma;
    constructor(prisma: PrismaService);
    findByUserId(userId: string): import("@prisma/client").Prisma.Prisma__ProfileClient<{
        id: string;
        gender: string | null;
        gender_looking_for: string | null;
        birthday: Date | null;
        lat: number | null;
        lon: number | null;
        bio: string | null;
        city: string | null;
        country: string | null;
        university: string | null;
        degree: string | null;
        major: string | null;
        avatarPhotoId: string | null;
        userId: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
