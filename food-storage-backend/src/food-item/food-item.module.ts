import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodItemService } from './food-item.service';
import { FoodItemController } from './food-item.controller';
import { FoodItem } from './entities/food-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FoodItem])],
  controllers: [FoodItemController],
  providers: [FoodItemService],
})
export class FoodItemModule {}
