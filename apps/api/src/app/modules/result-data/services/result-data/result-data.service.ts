import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  ResultData,
  ResultEntity,
  ResultDataDTO
} from '@syncvr-project/domain';

import { AppService } from '../../../../app.service';

@Injectable()
export class ResultDataService {
  constructor(
    @InjectRepository(ResultEntity)
    private _repository: Repository<ResultEntity>,
    private _service: AppService
  ) {}

  async createResult(dto: ResultDataDTO): Promise<ResultEntity> {
    return await this._repository.save(dto);
  }

  async getResults(): Promise<ResultData[]> {
    return await this._repository.find().then(data => {
      return data.map(item => this._service.getResultData(item));
    });
  }

  async getResult(id: string): Promise<ResultData> {
    return await this._repository
      .findOne(id)
      .then(data => this._service.getResultData(data));
  }
}
