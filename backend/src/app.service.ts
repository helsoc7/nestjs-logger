import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getinfo(): string {
    return 'Hello World!';
  }
}
