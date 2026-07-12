import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // All of the get queries will be here
  @Get()
  getAllUser(@Query('name') name: string): unknown {
    return this.userService.findAllUsers(name);
  }

  @Get(':id')
  getUserById(@Param('id') id: string): unknown {
    return this.userService.findOneUser(Number(id));
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return { data: createUserDto, message: 'User created successfully' };
  }

  @Put()
  updateUser(@Body() updateUserDto: UpdateUserDto) {
    return { data: updateUserDto, message: 'User updated successfully' };
  }
}
