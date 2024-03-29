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
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemService.findSingle(id)
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
