import { Controller, Get, Param } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly service: ProfilesService) {}

  @Get(':userId')
  findByUserId(@Param('userId') userId: string) {
    return this.service.findByUserId(userId);
  }
}
