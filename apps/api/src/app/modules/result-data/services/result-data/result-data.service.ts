import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  FibonacciResult as ResultDataModel,
  ResultDataEntity,
  ResultDataDTO
} from '@syncvr-project/domain';

import { AppService } from '../../../../app.service';

@Injectable()
export class ResultDataService {
  constructor(
    @InjectRepository(ResultDataEntity)
    private _repository: Repository<ResultDataEntity>,
    private _service: AppService
  ) {}

  async createResult(dto: ResultDataDTO): Promise<ResultDataEntity> {
    return await this._repository.save(dto);
  }

  async getResults(): Promise<ResultDataModel[]> {
    return await this._repository.find().then(data => {
      return data.map(item => this._service.getResult(item));
    });
  }

  async getResult(id: string): Promise<ResultDataModel> {
    return await this._repository
      .findOne(id)
      .then(data => this._service.getResult(data));
  }
}
