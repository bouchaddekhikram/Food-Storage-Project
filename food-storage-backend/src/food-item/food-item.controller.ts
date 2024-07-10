import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { FoodItemService } from './food-item.service';
import { FoodItem } from '../food-item.interface'; // Assuming this is your interface for food items

@Controller('food-items')
export class FoodItemController {
  constructor(private readonly foodItemService: FoodItemService) {}

  @Get()
  async findAll(): Promise<FoodItem[]> {
    return this.foodItemService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FoodItem> {
    return this.foodItemService.findOne(id);
  }

  @Post()
  async create(@Body() createFoodItemDto: Omit<FoodItem, 'id'>): Promise<FoodItem> {
    return this.foodItemService.create(createFoodItemDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFoodItemDto: Omit<FoodItem, 'id'>): Promise<FoodItem> {
    return this.foodItemService.update(id, updateFoodItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.foodItemService.remove(id);
  }
}
