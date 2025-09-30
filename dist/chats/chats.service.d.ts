import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto';
export declare class ChatsService {
    private prisma;
    constructor(prisma: PrismaService);
    findThreadsForUser(userId: string): Promise<{
        id: string;
        lastMessage: string | null;
        lastMessageAt: Date | null;
        unreadCount: number;
        otherUser: {
            id: string;
            username: string;
            avatar: string | null;
        };
        lastMessageContent: string;
    }[]>;
    findMessages(threadId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        threadId: string;
        senderId: string;
        content: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        deliveredAt: Date | null;
        readAt: Date | null;
    }[]>;
    createMessage(dto: CreateMessageDto): Promise<{
        id: string;
        createdAt: Date;
        threadId: string;
        senderId: string;
        content: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        deliveredAt: Date | null;
        readAt: Date | null;
    }>;
}
