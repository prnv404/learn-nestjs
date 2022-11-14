import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly ItemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.ItemModel.find();
  }

  async findSingle(id: string): Promise<Item> {
    return await this.ItemModel.findOne({ _id: id });
  }

  async createItem(item: Item): Promise<Item>{
    const newItem = new this.ItemModel(item)
    return await newItem.save()
  }
}
