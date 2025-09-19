import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto';

@Injectable()
export class ChatsService {
  constructor(private prisma: PrismaService) {}

  findThreadsForUser(userId: string) {
    return this.prisma.chatThread.findMany({
      where: { OR: [{ participantAId: userId }, { participantBId: userId }] },
      include: { messages: true },
    });
  }

  findMessages(threadId: string) {
    return this.prisma.message.findMany({ where: { threadId } });
  }

  createMessage(dto: CreateMessageDto) {
    return this.prisma.message.create({ data: dto });
  }
}
