import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({data:createUserDto});
  }

  findAll() {
    return this.databaseService.user.findMany();
  }
  async findUser(email: string): Promise<any> {
    return this.databaseService.user.findUnique({
      where:{
        email,
      }
    })
  }
  
}
