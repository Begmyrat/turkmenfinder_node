import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateMessageDto } from './dto';

@Controller('chats')
export class ChatsController {
  constructor(private readonly service: ChatsService) {}

  @Get('threads/:userId') findThreads(@Param('userId') userId: string) {
    return this.service.findThreadsForUser(userId);
  }

  @Get('messages/:threadId') findMessages(@Param('threadId') threadId: string) {
    return this.service.findMessages(threadId);
  }

  @Post('messages') createMessage(@Body() dto: CreateMessageDto) {
    return this.service.createMessage(dto);
  }
}
