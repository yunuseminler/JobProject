import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should create user', () => {
      //Arrange 
        const user = {
          "name":"Yunus",
          "surname":"Eminler",
          "email":"deneme@gmail.com",
          "password":"123",
          "balance" : 1
        } 

      //Act
        const success = service.create(user);

      //Assert
        expect(success).toHaveLength(1);
  });
});
