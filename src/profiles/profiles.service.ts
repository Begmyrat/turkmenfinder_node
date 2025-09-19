import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  findByUserId(userId: string) {
    return this.prisma.profile.findUnique({ where: { userId } });
  }
}
