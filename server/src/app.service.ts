import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify({
      version: "1.0.1",
      author: "CV. Idea Technology Indonesia",
    });
  }
}
