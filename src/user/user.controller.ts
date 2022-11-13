import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
    
export class UserController {
    constructor(private userService: UserService) { }
    
    @Get()
        
    create(@Req() req:Request) {
        return  this.userService.create(req)
    }
}
