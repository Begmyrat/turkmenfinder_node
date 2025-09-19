import { Module } from '@nestjs/common';
import { MatchesController } from './matches.controller';
import { ChatsService } from 'src/chats/chats.service';

@Module({
  controllers: [MatchesController],
  providers: [ChatsService],
  exports: [ChatsService],
})
export class MatchesModule {}
