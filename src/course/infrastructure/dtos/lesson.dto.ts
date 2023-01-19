import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

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

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly videoUrl: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lessonId: string;
}

export class UpdateLessonDto extends PartialType(CreateLessonDto) {}
