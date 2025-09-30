import { IsString, IsOptional } from 'class-validator';

export class CreateMessageDto {
  @IsOptional() @IsString() threadId?: string;
  @IsOptional() @IsString() matchId?: string;
  @IsString() senderId: string;
  @IsString() content: string;
}
