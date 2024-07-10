import { Schema, Document, model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

export interface User extends Document {
  username: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema<User>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, // Ensure 'select: false' to exclude from query results
});

UserSchema.pre<User>('save', async function (next) {
  // Hash the password before saving
  if (this.isModified('password')) {
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10); // 10 is the saltRounds
      this.password = hashedPassword;
      next();
    } catch (err) {
      return next(err);
    }
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const UserModel = model<User>('User', UserSchema);


export default UserSchema;