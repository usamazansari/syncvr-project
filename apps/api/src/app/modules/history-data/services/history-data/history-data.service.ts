import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { HistoryData as HistoryDataModel } from '@syncvr-project/interfaces';
import { HistoryData as HistoryDataEntity } from '../../database';

@Injectable()
export class HistoryDataService {
  constructor(
    @InjectRepository(HistoryDataEntity)
    private _repository: Repository<HistoryDataModel>
  ) {}

  async createEntry(payload: number): Promise<HistoryDataModel> {
    const entry = new HistoryDataModel({
      value: payload
    });
    return await this._repository.save(entry);
  }

  async getEntries(): Promise<HistoryDataModel[]> {
    return await this._repository.find();
  }
}
