import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodItemModule } from './food-item/food-item.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FoodItem } from './food-item/entities/food-item.entity';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // XAMPP default
      password: '', // Leave empty if no password is set
      database: 'food_storage',
      entities: [FoodItem, User],
      synchronize: true, // Enables automatic table creation
      logging: true, // Debug SQL queries
      charset: 'utf8mb4',
    }),
    FoodItemModule,
    UserModule,
    AuthModule,
  ],
  
})
export class AppModule {}
