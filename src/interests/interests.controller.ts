import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { InterestsService } from './interests.service';
import { CreateInterestDto, UpdateInterestDto } from './dto';

@Controller('interests')
export class InterestsController {
  constructor(private readonly interestsService: InterestsService) {}

  @Post()
  create(@Body() dto: CreateInterestDto) {
    return this.interestsService.create(dto);
  }

  @Get()
  findAll() {
    return this.interestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interestsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateInterestDto) {
    return this.interestsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interestsService.remove(id);
  }
}
