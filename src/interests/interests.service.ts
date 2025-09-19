import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInterestDto, UpdateInterestDto } from './dto';

@Injectable()
export class InterestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateInterestDto) {
    return this.prisma.interest.create({ data: dto });
  }

  async findAll() {
    return this.prisma.interest.findMany();
  }

  async findOne(id: string) {
    const interest = await this.prisma.interest.findUnique({ where: { id } });
    if (!interest) throw new NotFoundException('Interest not found');
    return interest;
  }

  async update(id: string, dto: UpdateInterestDto) {
    return this.prisma.interest.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.interest.delete({ where: { id } });
  }
}
