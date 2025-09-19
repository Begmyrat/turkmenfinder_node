import { Controller, Get, Param } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly service: NotificationsService) {}

  @Get(':userId')
  findForUser(@Param('userId') userId: string) {
    return this.service.findForUser(userId);
  }
}
