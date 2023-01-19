import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { LoginAuthDto } from "./login-auth.dto";

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

}