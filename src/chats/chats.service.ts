import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto';

@Injectable()
export class ChatsService {
  constructor(private prisma: PrismaService) {}

  async findThreadsForUser(userId: string) {
    const threads = await this.prisma.chatThread.findMany({
      where: { OR: [{ participantAId: userId }, { participantBId: userId }] },
      include: {
        participantA: {
          select: {
            id: true,
            username: true,
            profile: { select: { avatarPhotoId: true } },
          },
        },
        participantB: {
          select: {
            id: true,
            username: true,
            profile: { select: { avatarPhotoId: true } },
          },
        },
        messages: { orderBy: { createdAt: 'desc' }, take: 1 }, // last message
      },
      orderBy: { lastMessageAt: 'desc' },
    });

    return threads.map((thread) => {
      const isA = thread.participantAId === userId;
      const otherUser = isA ? thread.participantB : thread.participantA;
      return {
        id: thread.id,
        lastMessage: thread.lastMessage,
        lastMessageAt: thread.lastMessageAt,
        unreadCount: isA ? thread.unreadCountA : thread.unreadCountB,
        otherUser: {
          id: otherUser.id,
          username: otherUser.username,
          avatar: otherUser.profile?.avatarPhotoId ?? null,
        },
        // Optionally include last message content
        lastMessageContent: thread.messages[0]?.content ?? null,
      };
    });
  }

  findMessages(threadId: string) {
    return this.prisma.message.findMany({ where: { threadId } });
  }

  async createMessage(dto: CreateMessageDto) {
    let threadId = dto.threadId;

    // If no threadId, create/find thread by matchId
    if (!threadId && dto.matchId) {
      let thread = await this.prisma.chatThread.findUnique({
        where: { matchId: dto.matchId },
      });
      if (!thread) {
        // Find match to get participants
        const match = await this.prisma.match.findUnique({
          where: { id: dto.matchId },
        });
        if (!match) {
          throw new Error(`Match with id ${dto.matchId} not found`);
        }
        thread = await this.prisma.chatThread.create({
          data: {
            matchId: dto.matchId,
            participantAId: match.userAId,
            participantBId: match.userBId,
          },
        });
      }
      threadId = thread.id;
    }

    if (!threadId) {
      throw new Error('threadId is required to create a message');
    }

    // Now create the message
    return this.prisma.message.create({
      data: {
        threadId,
        senderId: dto.senderId,
        content: dto.content,
      },
    });
  }
}
