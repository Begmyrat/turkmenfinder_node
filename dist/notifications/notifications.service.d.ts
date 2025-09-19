import { PrismaService } from '../prisma/prisma.service';
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    findForUser(userId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        userId: string;
        type: import("@prisma/client").$Enums.NotificationType;
        payload: import("@prisma/client/runtime/library").JsonValue;
        isRead: boolean;
        createdAt: Date;
    }[]>;
}
