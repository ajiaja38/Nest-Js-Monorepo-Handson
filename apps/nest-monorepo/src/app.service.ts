import { AuthService } from '@app/auth';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly authService: AuthService) {}

  public getHello(): string {
    return 'Hello World!';
  }

  public getAuthLib(): string {
    return this.authService.getAllByMonoApp('App Nest Monorepo');
  }
}
