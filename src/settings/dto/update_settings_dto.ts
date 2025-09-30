import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class UpdateSettingsDto {
  @IsOptional()
  @IsBoolean()
  pushNotifications?: boolean;

  @IsOptional()
  @IsBoolean()
  newMatches?: boolean;

  @IsOptional()
  @IsBoolean()
  messages?: boolean;

  @IsOptional()
  @IsBoolean()
  superLikes?: boolean;

  @IsOptional()
  @IsBoolean()
  locationServices?: boolean;

  @IsOptional()
  @IsBoolean()
  showDistance?: boolean;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  maxDistance?: number;

  @IsOptional()
  @IsInt()
  @Min(18)
  @Max(100)
  ageRangeStart?: number;

  @IsOptional()
  @IsInt()
  @Min(18)
  @Max(100)
  ageRangeEnd?: number;

  @IsOptional()
  @IsBoolean()
  darkMode?: boolean;

  @IsOptional()
  @IsBoolean()
  discoverable?: boolean;

  @IsOptional()
  @IsBoolean()
  showOnline?: boolean;

  @IsOptional()
  @IsString()
  language?: string;
}
