import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly service: ProfilesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get(':userId')
  findByUserId(@Param('userId') userId: string) {
    return this.service.findByUserId(userId);
  }
}
