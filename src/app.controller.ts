import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { Prisma } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() email:string,password:string) {
    return this.authService.loginWithCredentials(email,password);
  }

  @Post('signup')
  async signup(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.authService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user-info')
  getUserInfo(@Request() req) {
    return req.user;
  }
}
