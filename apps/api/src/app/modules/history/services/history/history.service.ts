import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { HistoryEntity, HistoryData } from '@syncvr-project/domain';
import { AppService } from '../../../../app.service';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoryEntity)
    private _history: Repository<HistoryEntity>,
    private _service: AppService
  ) {}

  async createEntry(payload: number): Promise<HistoryData> {
    const dto = this._service.getHistoryDTO(payload);
    return await this._history
      .save(dto)
      .then(data => this._service.getHistoryData(data));
  }

  async getEntries(): Promise<HistoryData[]> {
    return await this._history
      .find({
        order: {
          timestamp: 'DESC'
        }
      })
      .then(data => data.map(item => this._service.getHistoryData(item)));
  }
}
