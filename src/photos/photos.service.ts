import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PhotosService {
  constructor(private prisma: PrismaService) {}

  findForUser(userId: string) {
    return this.prisma.userPhoto.findMany({ where: { userId } });
  }
}
