import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import UserSchema from './user.schema'; // Correct import

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  
  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username }).select('+password').exec(); // Include '+password' to override select: false
    if (user && await user.comparePassword(password)) {
      return user;
    }
    return null;
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({ username }).exec();
  }

  async createUser(username: string, password: string): Promise<User> {
    const newUser = new this.userModel({ username, password });
    return newUser.save();
  }
}
