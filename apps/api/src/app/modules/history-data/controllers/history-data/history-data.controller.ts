import { Body, Controller, Get, Post } from '@nestjs/common';

import {
  HistoryDataEntity,
  HistoryDataDTO,
  ResultDataEntity
} from '@syncvr-project/domain';
import { HistoryDataService } from '../../services';

@Controller('history-data')
export class HistoryDataController {
  constructor(private _service: HistoryDataService) {}

  @Post('entry')
  createEntry(
    @Body('payload') payload: number
  ): Promise<HistoryDataEntity | ResultDataEntity> {
    return this._service.createEntry(new HistoryDataDTO({ payload }));
  }

  @Get('entries')
  async getEntries(): Promise<HistoryDataEntity[]> {
    return await this._service.getEntries();
  }
}
