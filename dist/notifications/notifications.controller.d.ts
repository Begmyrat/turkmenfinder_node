import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly service;
    constructor(service: NotificationsService);
    findForUser(userId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        userId: string;
        type: import("@prisma/client").$Enums.NotificationType;
        payload: import("@prisma/client/runtime/library").JsonValue;
        isRead: boolean;
    }[]>;
}
