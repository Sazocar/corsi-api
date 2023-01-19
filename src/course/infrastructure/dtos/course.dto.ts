import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { LessonInfraestructure } from '../entities/Lesson';
import { Student } from 'src/Person/Infrastructure/entities/student';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly courseId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly subTitle: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly categories: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly lessons: LessonInfraestructure[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly keywords: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly imageUrl: string;

  @ApiProperty()
  readonly state: string;
  @ApiProperty()
  readonly students: Student[];
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
