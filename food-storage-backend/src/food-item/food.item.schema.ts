import { Schema } from 'mongoose';

export const FoodItemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  expirationDate: { type: Date, required: true },
});
