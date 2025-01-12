import { Module } from '@nestjs/common';
import { MonoAppController } from './mono-app.controller';
import { MonoAppService } from './mono-app.service';
import { AuthModule } from '@app/auth';

@Module({
  imports: [AuthModule],
  controllers: [MonoAppController],
  providers: [MonoAppService],
})
export class MonoAppModule {}
