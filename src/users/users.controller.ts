import { Controller, Get, Query, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('discover')
  async discover(
    @Req() req: { user?: { id?: string } },
    @Query('lat') lat: string,
    @Query('lon') lon: string,
    @Query('gender') gender?: string,
    @Query('radius') radius?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const currentUserId: string = req.user?.id ?? 'CURRENT_USER_ID';
    return this.usersService.discoverUsers({
      currentUserId,
      gender,
      lat: parseFloat(lat),
      lon: parseFloat(lon),
      radius: radius ? parseInt(radius) : 50,
      page: page ? parseInt(page) : 1,
      limit: limit ? parseInt(limit) : 20,
    });
  }
}
