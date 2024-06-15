import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  
  constructor(private readonly databaseService: DatabaseService) {}

  async findOne(email: string): Promise<any> {
    return this.databaseService.user.findUnique({
      where:{
        email,
      }
    })
  }
  async createUser(createUserDto: Prisma.UserCreateInput): Promise<any> {
    return this.databaseService.user.create({data:createUserDto});
  }
}
