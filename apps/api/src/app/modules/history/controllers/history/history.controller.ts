import { Body, Controller, Get, Post } from '@nestjs/common';

import {
  HistoryEntity,
  HistoryDTO,
  ResultEntity
} from '@syncvr-project/domain';
import { HistoryService } from '../../services';

@Controller('history')
export class HistoryController {
  constructor(private _service: HistoryService) {}

  @Post('entry')
  createEntry(@Body('payload') payload: number): Promise<ResultEntity> {
    return this._service.createEntry(new HistoryDTO({ payload }));
  }

  @Get('entries')
  async getEntries(): Promise<HistoryEntity[]> {
    return await this._service.getEntries();
  }
}
