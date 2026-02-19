import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ProductController } from './controllers/product.controller';
import { AuthController } from './auth/auth.controller';
import { OrderIntelligenceService } from './services/order-intelligence.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'ModanisaSuperPass2026!',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [ProductController, AuthController],
  providers: [OrderIntelligenceService],
})
export class AppModule {}
