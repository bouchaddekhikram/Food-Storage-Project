import { Injectable, NotFoundException } from '@nestjs/common';
import { FoodItem } from 'src/food-item.interface';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FoodItemService {
  constructor(@InjectModel('FoodItem') private readonly foodItemModel: Model<FoodItem>) {}

  async findAll(): Promise<FoodItem[]> {
    const items = await this.foodItemModel.find().lean().exec();
    return items.map(item => ({
      id: item._id.toString(), // Convert ObjectId to string
      name: item.name,
      quantity: item.quantity,
      expirationDate: item.expirationDate,
    }));
  }

  async findOne(id: string): Promise<FoodItem> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid ID');
    }
    const item = await this.foodItemModel.findById(id).lean().exec();
    if (!item) {
      throw new NotFoundException('Food item not found');
    }
    return {
      id: item._id.toString(),
      name: item.name,
      quantity: item.quantity,
      expirationDate: item.expirationDate,
    };
  }

  async create(foodItem: Omit<FoodItem, 'id'>): Promise<FoodItem> {
    const newFoodItem = new this.foodItemModel(foodItem);
    const savedItem = await newFoodItem.save();
    return {
      id: savedItem._id.toString(),
      name: savedItem.name,
      quantity: savedItem.quantity,
      expirationDate: savedItem.expirationDate,
    };
  }

  async update(id: string, updatedFoodItem: Omit<FoodItem, 'id'>): Promise<FoodItem> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid ID');
    }
    const item = await this.foodItemModel.findByIdAndUpdate(id, updatedFoodItem, { new: true }).lean().exec();
    if (!item) {
      throw new NotFoundException('Food item not found');
    }
    return {
      id: item._id.toString(),
      name: item.name,
      quantity: item.quantity,
      expirationDate: item.expirationDate,
    };
  }

  async remove(id: string): Promise<FoodItem> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid ID');
    }
    const item = await this.foodItemModel.findByIdAndDelete(id).lean().exec();
    if (!item) {
      throw new NotFoundException('Food item not found');
    }
    return {
      id: item._id.toString(),
      name: item.name,
      quantity: item.quantity,
      expirationDate: item.expirationDate,
    };
  }
}
