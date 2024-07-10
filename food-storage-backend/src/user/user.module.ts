import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    // Other necessary imports
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // If UserService is to be used outside this module
})
export class UserModule {}
