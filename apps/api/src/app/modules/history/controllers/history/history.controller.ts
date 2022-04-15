import { Body, Controller, Get, Post } from '@nestjs/common';

import { HistoryData } from '@syncvr-project/domain';
import { HistoryService } from '../../services';

@Controller('history')
export class HistoryController {
  constructor(private _service: HistoryService) {}

  @Post('create')
  createEntry(@Body('payload') payload: number): Promise<HistoryData> {
    return this._service.createEntry(payload);
  }

  @Get('entries')
  async getEntries(): Promise<HistoryData[]> {
    return await this._service.getEntries();
  }
}
