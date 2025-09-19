import { Controller, Get, Param } from '@nestjs/common';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
  constructor(private readonly service: MatchesService) {}

  @Get(':userId')
  findMatches(@Param('userId') userId: string) {
    return this.service.findMatchesForUser(userId);
  }
}
