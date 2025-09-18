import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { PhotosModule } from './photos/user-photo.module';
import { InterestsModule } from './interests/interests.module';
import { MatchesModule } from './matches/matches.module';
import { ChatsModule } from './chats/chats.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AgreementsModule } from './agreements/agreements.module';
import { UploadsModule } from './uploads/uploads.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProfilesModule,
    PhotosModule,
    InterestsModule,
    MatchesModule,
    ChatsModule,
    NotificationsModule,
    AgreementsModule,
    UploadsModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
