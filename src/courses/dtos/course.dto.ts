import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { student } from 'src/person/entities/student';
import { statecourse } from '../entities/statecourse';

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
  readonly lessons: string;

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
  readonly state: statecourse;
  readonly students: student[];
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
