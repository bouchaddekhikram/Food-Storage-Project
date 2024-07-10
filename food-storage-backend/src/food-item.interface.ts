import { Document } from 'mongoose';

// src/food-item.interface.ts
export interface FoodItem {
  id: string; // Change to string if _id is stored as string in MongoDB
  name: string;
  quantity: number;
  expirationDate: Date;
}

