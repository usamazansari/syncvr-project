import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  HistoryDataEntity,
  HistoryDataDTO,
  ResultDataEntity
} from '@syncvr-project/domain';
import { ResultDataService } from '../../../result-data';
import { AppService } from '../../../../app.service';

@Injectable()
export class HistoryDataService {
  constructor(
    @InjectRepository(HistoryDataEntity)
    private _history: Repository<HistoryDataEntity>,
    private _resultService: ResultDataService,
    private _service: AppService
  ) {}

  async createEntry(
    dto: HistoryDataDTO
  ): Promise<HistoryDataEntity | ResultDataEntity> {
    this._service.getFibonacci(dto.payload);
    return await this._history
      .save(dto)
      .then(
        async () =>
          await this._resultService.createResult(this._service.getResultDTO())
      );
  }

  async getEntries(): Promise<HistoryDataEntity[]> {
    return await this._history.find();
  }
}
