import { Body, Controller, Get, Post } from '@nestjs/common';
import { HistoryData } from '@syncvr-project/interfaces';

import { HistoryDataService } from '../../services';

@Controller('history-data')
export class HistoryDataController {
  constructor(private _service: HistoryDataService) {}

  @Post('entry')
  createEntry(@Body('payload') payload: number): Promise<HistoryData> {
    return this._service.createEntry(payload);
  }

  @Get('entries')
  async getEntries(): Promise<HistoryData[]> {
    return await this._service.getEntries();
  }
}
