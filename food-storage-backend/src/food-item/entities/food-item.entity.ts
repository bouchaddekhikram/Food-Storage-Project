import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class FoodItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  expirationDate: Date;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => User, user => user.foodItems)
  user: User;
}
