import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly courseId: number;
}

export class UpdateLessonDto extends PartialType(CreateLessonDto) {}
