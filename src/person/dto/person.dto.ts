import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { IsBoolean } from 'class-validator';
import { Course } from 'src/courses/entities/course';
export class createpersondto {
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

export class UpdatepersonDto extends PartialType(createpersondto) {}
