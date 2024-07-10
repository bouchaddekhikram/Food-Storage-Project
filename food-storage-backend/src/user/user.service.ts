import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserSchema } from './user.schema'; // Import User and UserSchema

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username }).exec();
    if (user && user.password === password) {
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
