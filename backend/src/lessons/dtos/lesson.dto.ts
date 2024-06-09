import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

import { Type } from 'class-transformer';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsArray()
  @IsUrl({}, { each: true })
  @IsNotEmpty({ each: true })
  lesson: string;

  @IsOptional()
  @IsString()
  category: string;

  @IsOptional()
  publisher: string;
}

export class UpdateLessonDto extends CreateLessonDto {}

export class FilterLessonstDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  limit: number;

  @IsOptional()
  @IsMongoId()
  cursor: number;

  @IsOptional()
  @IsString()
  q: string;

  @IsOptional()
  @IsString()
  sort: string;

  @IsOptional()
  @IsString()
  select: string;
}
