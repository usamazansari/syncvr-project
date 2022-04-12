import { Test, TestingModule } from '@nestjs/testing';
import { ResultDataController } from './result-data.controller';

describe('ResultDataController', () => {
  let controller: ResultDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResultDataController]
    }).compile();

    controller = module.get<ResultDataController>(ResultDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
