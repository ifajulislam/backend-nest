import { Controller, Get, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  // All of the get queries will be here
  @Get()
  getUser(@Query('name') name: string) {
    const users = [
      { id: 1, name: 'Abul' },
      { id: 2, name: 'Babul' },
    ];

    if (name) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

    return users;
  }
}
