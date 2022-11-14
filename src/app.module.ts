import { Module } from '@nestjs/common';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { key } from './config/key';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(key.MONGO_URI)],
})
export class AppModule {}
