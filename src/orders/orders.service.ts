import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class OrdersService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createOrderDto: Prisma.OrderCreateInput) {
    return this.databaseService.order.create({data:createOrderDto});
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
