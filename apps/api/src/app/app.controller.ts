import { Controller, Get, Query } from '@nestjs/common';
import { IFibonacciResult } from '@syncvr-project/interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('fibonacci')
  getFibonacci(@Query('payload') payload: number): IFibonacciResult {
    return this.appService.getFibonacci(payload);
  }
}
