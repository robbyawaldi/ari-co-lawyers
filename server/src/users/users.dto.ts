import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;
}

export class UserDto {
  @IsNotEmpty()
  @ApiProperty()
  id: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;
}

export class LoginUserDto {
  @IsNotEmpty() 
  email: string;
  @IsNotEmpty()
  password: string;

}
