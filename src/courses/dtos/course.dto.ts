import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { Student } from 'src/person/entities/student';
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

  @IsNotEmpty()
  @ApiProperty()
  readonly state: string;
  @ApiProperty()
  readonly students: Student[];
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
