import { AuthService } from '@app/auth';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MonoAppService {
  constructor(private readonly authService: AuthService) {}

  getHello(): string {
    return 'Hello World';
  }

  public getAuthLib(): string {
    return this.authService.getAllByMonoApp('App Mono App');
  }
}
