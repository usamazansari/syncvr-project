import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  HistoryEntity,
  HistoryDTO,
  ResultEntity
} from '@syncvr-project/domain';
import { ResultService } from '../../../result';
import { AppService } from '../../../../app.service';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoryEntity)
    private _history: Repository<HistoryEntity>,
    private _resultService: ResultService,
    private _service: AppService
  ) {}

  async createEntry(dto: HistoryDTO): Promise<ResultEntity> {
    this._service.getResult(dto.payload);
    return await this._history
      .save(dto)
      .then(
        async () =>
          await this._resultService.createResult(this._service.getResultDTO())
      );
  }

  async getEntries(): Promise<HistoryEntity[]> {
    return await this._history.find();
  }
}
