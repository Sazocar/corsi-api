import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from '../dto/register-auth.dto';
import { hash, compare } from 'bcrypt';
import { LoginAuthDto } from '../dto/login-auth.dto';
import { User } from '../entities/user.entity';



@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject;
    const plainToHash = await hash(password, 10);
    userObject = {
      ...userObject,
      password: plainToHash
    };
    const newUser = this.userRepo.create(userObject);
    return this.userRepo.save(newUser);
  }

  async login(userObjectLogin: LoginAuthDto) {
    const { email, password } = userObjectLogin;
    const findUser = await this.userRepo.findOneBy({email});
    if (!findUser) {
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND)
    }
    
    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword) {
      throw new HttpException('PASSWORD_INCORRECT', HttpStatus.FORBIDDEN)
    }

    const data = findUser;

    return data;
  }
}
