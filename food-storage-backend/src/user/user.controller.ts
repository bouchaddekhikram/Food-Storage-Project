import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users') // Ensure plural route naming
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':username')
  async getUserByUsername(@Param('username') username: string): Promise<User | null> {
    return this.userService.findByUsername(username);
  }
}