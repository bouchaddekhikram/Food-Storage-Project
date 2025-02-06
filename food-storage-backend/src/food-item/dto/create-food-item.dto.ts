export class CreateFoodItemDto {
  name: string;
  quantity: number;
  expirationDate: Date;
  description?: string;
  userId: number;
} 