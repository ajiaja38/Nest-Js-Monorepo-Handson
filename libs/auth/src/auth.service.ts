import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public getAllByMonoApp(appVersion: string): string {
    return `This is auth lib from app -> ${appVersion}`;
  }
}
