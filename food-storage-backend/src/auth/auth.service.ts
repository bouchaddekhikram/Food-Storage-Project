import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class AuthService {
    
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.validateUser(username, password);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(username: string, password: string): Promise<any> {
    // Check if the username is already taken
    const existingUser = await this.userService.findByUsername(username);
    if (existingUser) {
      throw new Error('Username already exists');
    }

    // Create a new user
    const newUser = await this.userService.createUser(username, password);

    // Optionally, perform additional tasks (e.g., send welcome email)

    return newUser; // You can return whatever is appropriate for your use case
  }
}
