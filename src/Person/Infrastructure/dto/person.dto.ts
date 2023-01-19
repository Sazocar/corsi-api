import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsEmail,
  IsPhoneNumber,
  IsArray,
  IsPositive,
} from 'class-validator';
import { CourseInfraestructure } from 'src/course/infrastructure/entities/course';
export class CreatePersonDto {
  readonly courses?: CourseInfraestructure[];
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lastName: string;

  @ApiProperty()
  readonly isActive: boolean;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly phone: number;

  @ApiProperty()
  readonly coursesId: number[];
}

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
