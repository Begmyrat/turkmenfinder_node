import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AgreementsService } from './agreements.service';
import { CreateAgreementDto } from './dto';

@Controller('agreements')
export class AgreementsController {
  constructor(private readonly service: AgreementsService) {}

  @Post() create(@Body() dto: CreateAgreementDto) {
    return this.service.create(dto);
  }
  @Get() findAll() {
    return this.service.findAll();
  }
  @Get(':id') findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
