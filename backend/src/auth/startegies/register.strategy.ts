import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from '../auth.service';

@Injectable()
export class SignUpStrategy extends PassportStrategy(Strategy, 'signup') {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    const user = await this.authService.createUser(email, password);
    if (!user)
      throw new UnauthorizedException('Login user or password does not match.');
    return user;
  }
}