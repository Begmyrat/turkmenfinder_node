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
        type: import("@prisma/client").$Enums.NotificationType;
        payload: import("@prisma/client/runtime/library").JsonValue;
        isRead: boolean;
        createdAt: Date;
        userId: string;
    }>;
    findForUser(userId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        type: import("@prisma/client").$Enums.NotificationType;
        payload: import("@prisma/client/runtime/library").JsonValue;
        isRead: boolean;
        createdAt: Date;
        userId: string;
    }[]>;
}
