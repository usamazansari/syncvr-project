import { Body, Controller, Get, Post } from '@nestjs/common';

import {
  HistoryEntity,
  HistoryDTO,
  ResultEntity
} from '@syncvr-project/domain';
import { HistoryDataService } from '../../services';

@Controller('history-data')
export class HistoryDataController {
  constructor(private _service: HistoryDataService) {}

  @Post('entry')
  createEntry(@Body('payload') payload: number): Promise<ResultEntity> {
    return this._service.createEntry(new HistoryDTO({ payload }));
  }

  @Get('entries')
  async getEntries(): Promise<HistoryEntity[]> {
    return await this._service.getEntries();
  }
}
