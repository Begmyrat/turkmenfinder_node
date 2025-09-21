import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateMessageDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('chats')
export class ChatsController {
  constructor(private readonly service: ChatsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('threads/:userId')
  findThreads(@Param('userId') userId: string) {
    return this.service.findThreadsForUser(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('messages/:threadId')
  findMessages(@Param('threadId') threadId: string) {
    return this.service.findMessages(threadId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('messages')
  createMessage(@Body() dto: CreateMessageDto) {
    return this.service.createMessage(dto);
  }
}
