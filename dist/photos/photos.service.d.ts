import { PrismaService } from '../prisma/prisma.service';
export declare class PhotosService {
    private prisma;
    constructor(prisma: PrismaService);
    findForUser(userId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        userId: string;
        s3Key: string;
        ordering: number;
        createdAt: Date;
    }[]>;
}
