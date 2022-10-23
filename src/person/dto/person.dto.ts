import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Course } from 'src/courses/entities/course';
export class CreatePersonDto {
  readonly courses?: Course[];
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly surname: string;
  @IsBoolean()
  readonly IsActive: boolean;
}

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
