import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { RoleGuard } from 'src/guards/role.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // All of the get queries will be here
  @Get()
  @UseGuards(RoleGuard)
  getAllUser(@Query('name') name: string): unknown {
    return this.userService.findAllUsers(name);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): unknown {
    // ParseIntPipe will convert the id to int
    return this.userService.findOneUser(id);
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
