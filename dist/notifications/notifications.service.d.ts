import { PrismaService } from '../prisma/prisma.service';
import { NotificationType } from '@prisma/client';
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ userId, type, payload, }: {
        userId: string;
        type: NotificationType;
        payload: any;
    }): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        type: import("@prisma/client").$Enums.NotificationType;
        payload: import("@prisma/client/runtime/library").JsonValue;
        isRead: boolean;
    }>;
    findForUser(userId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        userId: string;
        type: import("@prisma/client").$Enums.NotificationType;
        payload: import("@prisma/client/runtime/library").JsonValue;
        isRead: boolean;
    }[]>;
}
