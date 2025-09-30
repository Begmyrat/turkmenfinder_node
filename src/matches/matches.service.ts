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

  async findMatchesForUser(userId: string) {
    const matches = await this.prisma.match.findMany({
      where: {
        OR: [{ userAId: userId }, { userBId: userId }],
      },
      include: {
        userA: {
          select: {
            id: true,
            username: true,
            email: true,
            profile: true,
            interests: {
              include: {
                interest: true,
              },
            },
          },
        },
        userB: {
          select: {
            id: true,
            username: true,
            email: true,
            profile: true,
            interests: {
              include: {
                interest: true,
              },
            },
          },
        },
        chatThread: true,
      },
    });

    // Map to only include the "other" user's info
    return matches.map((match) => {
      const isUserA = match.userAId === userId;
      const otherUser = isUserA ? match.userB : match.userA;
      return {
        id: match.id,
        createdAt: match.createdAt,
        chatThread: match.chatThread,
        user: {
          ...otherUser,
          interests: otherUser.interests.map((i) => i.interest),
        },
      };
    });
  }

  async swipe(
    userAId: string,
    userBId: string,
    liked: boolean,
    superLike: boolean = false,
  ) {
    // Record the swipe
    await this.prisma.swipe.upsert({
      where: { swiperId_swipedId: { swiperId: userAId, swipedId: userBId } },
      update: { liked, superLike },
      create: { swiperId: userAId, swipedId: userBId, liked, superLike },
    });

    // Notify if superLike
    if (superLike) {
      await this.notificationsService.create({
        userId: userBId,
        type: NotificationType.SUPER_LIKE,
        payload: { from: userAId },
      });
    }

    // Check if userB liked userA
    const reciprocal = await this.prisma.swipe.findUnique({
      where: { swiperId_swipedId: { swiperId: userBId, swipedId: userAId } },
    });

    if (liked && reciprocal && reciprocal.liked) {
      // Create a match
      const match = await this.prisma.match.create({
        data: { userAId, userBId },
        include: {
          userA: {
            select: {
              id: true,
              username: true,
              profile: { select: { avatarPhotoId: true } },
            },
          },
          userB: {
            select: {
              id: true,
              username: true,
              profile: { select: { avatarPhotoId: true } },
            },
          },
        },
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

      return {
        isMatch: true,
        match: {
          id: match.id,
          userA: {
            id: match.userA.id,
            username: match.userA.username,
            avatar: match.userA.profile?.avatarPhotoId ?? null,
          },
          userB: {
            id: match.userB.id,
            username: match.userB.username,
            avatar: match.userB.profile?.avatarPhotoId ?? null,
          },
        },
      };
    }

    return { isMatch: false };
  }
}
