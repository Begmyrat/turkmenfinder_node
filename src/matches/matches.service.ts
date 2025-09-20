import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { NotificationType } from '@prisma/client';

@Injectable()
export class MatchesService {
  constructor(
    private prisma: PrismaService,
    private notificationsService: NotificationsService,
  ) {}

  findMatchesForUser(userId: string) {
    return this.prisma.match.findMany({
      where: { OR: [{ userAId: userId }, { userBId: userId }] },
      include: { chatThread: true },
    });
  }

  async swipe(userAId: string, userBId: string, liked: boolean) {
    // Record the swipe
    await this.prisma.swipe.upsert({
      where: { swiperId_swipedId: { swiperId: userAId, swipedId: userBId } },
      update: { liked },
      create: { swiperId: userAId, swipedId: userBId, liked },
    });

    // Check if userB liked userA
    const reciprocal = await this.prisma.swipe.findUnique({
      where: { swiperId_swipedId: { swiperId: userBId, swipedId: userAId } },
    });

    if (liked && reciprocal && reciprocal.liked) {
      // Create a match
      const match = await this.prisma.match.create({
        data: { userAId, userBId },
      });

      // Send notifications to both users
      await this.notificationsService.create({
        userId: userAId,
        type: NotificationType.MATCH,
        payload: { matchId: match.id, with: userBId },
      });
      await this.notificationsService.create({
        userId: userBId,
        type: NotificationType.MATCH,
        payload: { matchId: match.id, with: userAId },
      });

      return { match, isMatch: true };
    }

    return { isMatch: false };
  }
}
