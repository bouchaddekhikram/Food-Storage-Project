import { Module } from '@nestjs/common';
import { FoodItemModule } from './food-item/food-item.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://wajdiraouafi:WAJdi112233@cluster0.knp1peb.mongodb.net/Food-Storage'), 
    FoodItemModule, UserModule, AuthModule,
  ],
})
export class AppModule {}
