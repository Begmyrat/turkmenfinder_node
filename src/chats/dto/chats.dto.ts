import { IsString } from 'class-validator';
export class CreateMessageDto {
  @IsString() threadId: string;
  @IsString() senderId: string;
  @IsString() content: string;
}
