import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationType } from '@prisma/client';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async create({
    userId,
    type,
    payload,
  }: {
    userId: string;
    type: NotificationType;
    payload: any;
  }) {
    return this.prisma.notification.create({
      data: {
        userId,
        type,
        payload,
      },
    });
  }

  findForUser(userId: string) {
    return this.prisma.notification.findMany({ where: { userId } });
  }
}
