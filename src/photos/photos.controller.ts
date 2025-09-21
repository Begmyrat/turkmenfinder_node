import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('photos')
export class PhotosController {
  constructor(private readonly service: PhotosService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get(':userId')
  findForUser(@Param('userId') userId: string) {
    return this.service.findForUser(userId);
  }
}
