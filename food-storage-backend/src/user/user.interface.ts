import { Document } from 'mongoose';

export interface User extends Document {
  username: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
