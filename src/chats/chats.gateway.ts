import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatsService } from './chats.service';
import * as jwt from 'jsonwebtoken';

@WebSocketGateway({ cors: true })
export class ChatsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly chatsService: ChatsService) {}
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    // JWT authentication (recommended)
    const token = client.handshake.auth?.token;
    if (!token) {
      client.disconnect();
      return;
    }
    try {
      // Replace 'your_jwt_secret' with your actual JWT secret
      const payload = jwt.verify(token, process.env.JWT_SECRET || '');
      // Optionally attach user info to client object for later use
      (client as any).user = payload;
    } catch {
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    // Handle user disconnect if needed
  }

  @SubscribeMessage('sendMessage')
  async handleSendMessage(
    @MessageBody()
    data: {
      threadId?: string;
      matchId?: string;
      senderId: string;
      content: string;
    },
    @ConnectedSocket() client: Socket,
  ) {
    console.log('DATAAAA: ', data);
    // Create message (handles thread creation if needed)
    const message = await this.chatsService.createMessage(data);

    // Use the threadId from the created message
    const threadId = message.threadId;

    // Emit to all clients in the thread room (including sender if joined)
    this.server.to(threadId).emit('newMessage', message);

    // If this was the first message (thread just created), emit threadCreated event to sender
    if (data.matchId && !data.threadId) {
      client.emit('threadCreated', { threadId });
      // Optionally, auto-join the sender to the new thread room
      client.join(threadId);
    }

    return message;
  }

  @SubscribeMessage('joinThread')
  handleJoinThread(
    @MessageBody() data: { threadId: string },
    @ConnectedSocket() client: Socket,
  ) {
    client.join(data.threadId);
  }
}
