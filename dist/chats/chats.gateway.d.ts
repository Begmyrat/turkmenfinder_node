import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatsService } from './chats.service';
export declare class ChatsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    server: Server;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleSendMessage(data: {
        threadId?: string;
        matchId?: string;
        senderId: string;
        content: string;
    }, client: Socket): Promise<{
        id: string;
        createdAt: Date;
        threadId: string;
        senderId: string;
        content: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        deliveredAt: Date | null;
        readAt: Date | null;
    }>;
    handleJoinThread(data: {
        threadId: string;
    }, client: Socket): void;
}
