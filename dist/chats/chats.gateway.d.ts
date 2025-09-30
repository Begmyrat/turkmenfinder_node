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
        content: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
        deliveredAt: Date | null;
        readAt: Date | null;
        threadId: string;
        senderId: string;
    }>;
    handleJoinThread(data: {
        threadId: string;
    }, client: Socket): void;
}
