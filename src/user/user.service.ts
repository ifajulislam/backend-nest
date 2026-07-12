import { Injectable } from '@nestjs/common';
import { LoggerService } from './user.logger';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(private readonly logger: LoggerService) {}

  private users: User[] = [
    { id: 1, name: 'Abul', email: 'abul@gmail.com' },
    { id: 2, name: 'Babul', email: 'babul@gmail.com' },
  ];

  findAllUsers(name: string = '') {
    this.logger.log('Fiding all users');

    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }
}
