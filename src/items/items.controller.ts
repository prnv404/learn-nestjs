import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Res,
  Req,
  Param,
} from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { Request, Response, NextFunction } from 'express'
import { identity } from 'rxjs'

@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    return res.send(req.hostname)
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `${id}`
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `name: ${createItemDto.name} discription ${createItemDto.discription} quantity ${createItemDto.qty}`
  }

  @Patch(':id')
  updateOne(@Param('id') id, @Body() createItemDto: CreateItemDto): string {
    return `${id}`
  }
}
