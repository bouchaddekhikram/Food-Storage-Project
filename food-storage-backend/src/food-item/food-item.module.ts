import { Module } from '@nestjs/common';
import { FoodItemService } from './food-item.service';
import { FoodItemController } from './food-item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodItemSchema } from '../food-item/food.item.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'FoodItem', schema: FoodItemSchema }]),
  ],
  providers: [FoodItemService],
  controllers: [FoodItemController],
})
export class FoodItemModule {}
