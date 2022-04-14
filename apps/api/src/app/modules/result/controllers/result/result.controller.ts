import { Controller, Get, Param } from '@nestjs/common';

import { ResultData } from '@syncvr-project/domain';

import { ResultService } from '../../services';

@Controller('result')
export class ResultController {
  constructor(private _service: ResultService) {}

  @Get('results')
  async getResults(): Promise<ResultData[]> {
    return await this._service.getResults();
  }

  @Get(':id')
  async getResult(@Param('id') id: string): Promise<ResultData> {
    return await this._service.getResult(id);
  }
}
