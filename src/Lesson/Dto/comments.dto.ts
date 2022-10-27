import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateCommentsDto {
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  commentId: number;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  personId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  comment: string;
}
