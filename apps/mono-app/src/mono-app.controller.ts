import { Controller, Get } from '@nestjs/common';
import { MonoAppService } from './mono-app.service';

@Controller()
export class MonoAppController {
  constructor(private readonly monoAppService: MonoAppService) {}

  @Get()
  getHello(): string {
    return this.monoAppService.getHello();
  }

  @Get('auth-lib')
  getAuthLibHandler(): string {
    return this.monoAppService.getAuthLib();
  }
}
