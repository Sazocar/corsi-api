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

  @IsString({ each: true })
  @IsNotEmpty()
  @ApiProperty()
  readonly comments: string[];
}

export class UpdateLessonDto extends PartialType(CreateLessonDto) {}
