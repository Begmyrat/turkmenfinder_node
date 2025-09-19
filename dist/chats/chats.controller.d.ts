import { ChatsService } from './chats.service';
import { CreateMessageDto } from './dto';
export declare class ChatsController {
    private readonly service;
    constructor(service: ChatsService);
    findThreads(userId: string): import("@prisma/client").Prisma.PrismaPromise<({
        messages: {
            id: string;
            createdAt: Date;
            threadId: string;
            senderId: string;
            content: string;
            metadata: import("@prisma/client/runtime/library").JsonValue | null;
            deliveredAt: Date | null;
            readAt: Date | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        matchId: string | null;
        participantAId: string;
        participantBId: string;
        lastMessage: string | null;
        lastMessageAt: Date | null;
        unreadCountA: number;
        unreadCountB: number;
    })[]>;
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
    createMessage(dto: CreateMessageDto): import("@prisma/client").Prisma.Prisma__MessageClient<{
        id: string;
        createdAt: Date;
        threadId: string;
        senderId: string;
        content: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        deliveredAt: Date | null;
        readAt: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
