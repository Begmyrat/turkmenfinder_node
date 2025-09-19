import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateInterestDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateInterestDto {
  @IsString()
  @IsOptional()
  name?: string;
}
