import { IsString } from 'class-validator';
export class CreateAgreementDto {
  @IsString() version: string;
  @IsString() content: string;
}
