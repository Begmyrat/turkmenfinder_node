import {
  Body,
  Controller,
  Get,
  Patch,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { EditProfileDto } from './dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getMe(@Req() req: { user?: { id?: string } }) {
    const userId = req.user?.id;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return this.usersService.findById(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('discover')
  async discover(
    @Req() req: { user?: { id?: string } },
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const userId = req.user?.id;
    if (!userId) throw new Error('User not authenticated');
    // const user = await this.usersService.findById(userId);
    const profile = await this.usersService.getProfile(userId);

    return this.usersService.discoverUsers({
      userId: userId,
      gender: profile?.gender_looking_for || '',
      // lat: user?.profile?.lat,
      // lon: user?.profile?.lon,
      // radius: user?.settings?.maxDistance ?? 50,
      page: page ? parseInt(page) : 1,
      limit: limit ? parseInt(limit) : 20,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('edit-profile')
  async editProfile(
    @Req() req: { user?: { id?: string } },
    @Body() dto: EditProfileDto,
  ) {
    const userId = req.user?.id;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    const updatedUser = await this.usersService.editUserProfile(userId, dto);
    return updatedUser;
  }
}
