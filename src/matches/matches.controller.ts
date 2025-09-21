import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('matches')
export class MatchesController {
  constructor(private readonly service: MatchesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get(':userId')
  findMatches(@Param('userId') userId: string) {
    return this.service.findMatchesForUser(userId);
  }
}
