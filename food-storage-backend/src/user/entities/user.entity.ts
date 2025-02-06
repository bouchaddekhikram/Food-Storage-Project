import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FoodItem } from '../../food-item/entities/food-item.entity';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => FoodItem, foodItem => foodItem.user)
  foodItems: FoodItem[];

  async comparePassword(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
  }
} 