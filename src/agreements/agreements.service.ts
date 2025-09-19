import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAgreementDto } from './dto';

@Injectable()
export class AgreementsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateAgreementDto) {
    return this.prisma.agreement.create({ data: dto });
  }
  findAll() {
    return this.prisma.agreement.findMany({ include: { acceptances: true } });
  }
  findOne(id: string) {
    return this.prisma.agreement.findUnique({
      where: { id },
      include: { acceptances: true },
    });
  }
}
