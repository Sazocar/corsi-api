import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { Comments } from '../Entities/Comments';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly courseId: number;

  @IsNotEmpty()
  @ApiProperty()
  readonly comments: Comments[];
}

export class UpdateLessonDto extends PartialType(CreateLessonDto) {}
