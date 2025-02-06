import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodItem } from './entities/food-item.entity';
import { CreateFoodItemDto } from './dto/create-food-item.dto';
import { UpdateFoodItemDto } from './dto/update-food-item.dto';

@Injectable()
export class FoodItemService {
  constructor(
    @InjectRepository(FoodItem)
    private foodItemRepository: Repository<FoodItem>,
  ) {}

  create(createFoodItemDto: CreateFoodItemDto) {
    const foodItem = this.foodItemRepository.create(createFoodItemDto);
    return this.foodItemRepository.save(foodItem);
  }

  findAll() {
    return this.foodItemRepository.find();
  }

  findOne(id: number) {
    return this.foodItemRepository.findOne({ where: { id } });
  }

  async update(id: number, updateFoodItemDto: UpdateFoodItemDto) {
    await this.foodItemRepository.update(id, updateFoodItemDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const foodItem = await this.findOne(id);
    return this.foodItemRepository.remove(foodItem);
  }
}
