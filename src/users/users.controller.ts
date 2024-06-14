import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    try{
      return this.usersService.create(createUserDto);
    }
    catch(error){
      console.log("User_Post",error);
    }
  }

  @Get()
  findAll() {
    try{
      return this.usersService.findAll();
    }
    catch(error){
      console.log("USER_GET",error);
    }
  }
  @Post()
  findUser(email: string) {
    try{
      return this.usersService.findUser(email);
    }
    catch(error){
      console.log("User_FindUser",error);
    }
  }

}
