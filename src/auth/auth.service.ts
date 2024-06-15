import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async createUser(createUserDto: Prisma.UserCreateInput): Promise<any> {
      return this.usersService.createUser(createUserDto);
  }
  async loginWithCredentials(email:string,password:string) {
    const payload = { username: email, sub: password };

    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
