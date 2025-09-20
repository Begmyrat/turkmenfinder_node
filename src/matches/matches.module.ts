import { Module } from '@nestjs/common';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';
import { NotificationsModule } from 'src/notifications/notifications.module';

@Module({
  controllers: [MatchesController],
  providers: [MatchesService],
  exports: [MatchesService],
  imports: [NotificationsModule],
})
export class MatchesModule {}
