import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { Lesson } from 'src/Lesson/Entities/Lesson';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lessons: Lesson[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly categories: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly keywords: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly state: string;
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
