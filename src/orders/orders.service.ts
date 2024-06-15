import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class OrdersService {
  constructor(private readonly databaseService: DatabaseService,private readonly userService: UsersService) {}

  async create(createOrderDto: Prisma.OrderCreateInput,email: string) {

    const myUser = await this.userService.findOne("yu");
    if(createOrderDto.price*createOrderDto.amount <= myUser.balance){
      createOrderDto.userId = myUser.id;
      return this.databaseService.order.create({data:createOrderDto});

    }
    return "Bakiye Yetersiz";
  }

  findAll() {
    return this.databaseService.order.findMany();
  }

  findOne(id: number) {
    return this.databaseService.order.findUnique({
      where:{
        id,
      }
    })
  }

}
