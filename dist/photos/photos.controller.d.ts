import { PhotosService } from './photos.service';
export declare class PhotosController {
    private readonly service;
    constructor(service: PhotosService);
    findForUser(userId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        userId: string;
        s3Key: string;
        ordering: number;
        createdAt: Date;
    }[]>;
}
