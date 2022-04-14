import { Controller, Get, Param } from '@nestjs/common';

import { ResultData } from '@syncvr-project/domain';

import { ResultDataService } from '../../services';

@Controller('result-data')
export class ResultDataController {
  constructor(private _service: ResultDataService) {}

  @Get('results')
  async getResults(): Promise<ResultData[]> {
    return await this._service.getResults();
  }

  @Get('result/:id')
  async getResult(@Param('id') id: string): Promise<ResultData> {
    return await this._service.getResult(id);
  }
}
