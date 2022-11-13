import { Injectable } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public users: User[];

  getUser(): User[] {
    return this.users
  }
}
