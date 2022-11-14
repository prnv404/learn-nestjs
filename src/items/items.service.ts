import { Injectable } from '@nestjs/common'
import { Item } from './interfaces/item.interface'
@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '123',
      name: 'data 1',
      qty: 3,
    },
    {
      id: '1234',
      name: 'data 2',
      qty: 3,
    },
  ]
  findAll(): Item[] {
    return this.items
  }

  findSingle(id: string): Item {
    return this.items.find((item) => item.id === id)
  }
}
