import { Module } from '@nestjs/common';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatsGateway } from './chats.gateway';

@Module({
  controllers: [ChatsController],
  providers: [ChatsService, ChatsGateway, PrismaService],
  exports: [ChatsService],
})
export class ChatsModule {}
