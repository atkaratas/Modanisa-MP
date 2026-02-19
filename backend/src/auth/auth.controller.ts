import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Post('login')
  async login(@Body() credentials: any) {
    // In real app: validate user from DB
    if (credentials.email === 'vendor@modanisa.com' && credentials.password === 'pass123') {
      const payload = { sub: 'vendor-id-123', email: credentials.email, role: 'vendor' };
      return {
        access_token: await this.jwtService.signAsync(payload),
        user: { name: 'Vendor Name', role: 'vendor' }
      };
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  @Post('register')
  async register(@Body() userData: any) {
    return { status: 'success', message: 'User registered. Please verify email.' };
  }
}
