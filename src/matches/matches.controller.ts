import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('matches')
export class MatchesController {
  constructor(private readonly service: MatchesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findMatches(@Req() req: { user?: { id?: string } }) {
    const userId = req.user?.id;
    if (!userId) throw new Error('User not authenticated');
    return this.service.findMatchesForUser(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('swipe')
  async swipe(
    @Req() req: { user?: { id?: string } },
    @Body() body: { userBId: string; liked: boolean; superLike?: boolean },
  ) {
    const userAId = req.user?.id;
    if (!userAId) throw new Error('User not authenticated');
    const { userBId, liked, superLike = false } = body;
    return this.service.swipe(userAId, userBId, liked, superLike);
  }
}
