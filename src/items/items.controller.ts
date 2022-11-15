import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemService.findSingle(id);
  }

  @Post()
   create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.createItem(createItemDto)
  }

  @Patch(':id')
  updateOne(@Param('id') id, @Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.updateItem(id,createItemDto)
  }
}
