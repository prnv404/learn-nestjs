import { Injectable, Req } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  get() {
    return 'pranav';
  }
  create(req: Request) {
    return req.body;
  }
}
