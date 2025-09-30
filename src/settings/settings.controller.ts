import { Controller, Get, Patch, Body, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SettingsService } from './settings.service';
import { UpdateSettingsDto } from './dto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getSettings(@Req() req: { user?: { id?: string } }) {
    const userId = req.user?.id;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return this.settingsService.getSettings(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch()
  async updateSettings(
    @Req() req: { user?: { id?: string } },
    @Body() dto: UpdateSettingsDto,
  ) {
    const userId = req.user?.id;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return this.settingsService.updateSettings(userId, dto);
  }
}
