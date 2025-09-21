import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly service: NotificationsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get(':userId')
  findForUser(@Param('userId') userId: string) {
    return this.service.findForUser(userId);
  }
}
