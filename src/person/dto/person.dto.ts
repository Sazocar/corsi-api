import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsEmail,
  IsPhoneNumber,
  IsArray,
} from 'class-validator';
import { Course } from 'src/courses/entities/course';
export class CreatePersonDto {
  readonly courses?: Course[];
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly surname: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly isActive: boolean;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly phone: number;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  readonly coursesId: number[];
}

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
