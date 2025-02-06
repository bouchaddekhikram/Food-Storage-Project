import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { FoodItemService } from './food-item.service';
import { CreateFoodItemDto } from './dto/create-food-item.dto';
import { UpdateFoodItemDto } from './dto/update-food-item.dto';
import { FoodItem } from './entities/food-item.entity';

@Controller('food-items')
export class FoodItemController {
  constructor(private readonly foodItemService: FoodItemService) {}

  @Post()
  create(@Body() createFoodItemDto: CreateFoodItemDto): Promise<FoodItem> {
    return this.foodItemService.create(createFoodItemDto);
  }

  @Get()
  findAll(): Promise<FoodItem[]> {
    return this.foodItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<FoodItem> {
    return this.foodItemService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateFoodItemDto: UpdateFoodItemDto,
  ): Promise<FoodItem> {
    return this.foodItemService.update(+id, updateFoodItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<FoodItem> {
    return this.foodItemService.remove(+id);
  }
}
