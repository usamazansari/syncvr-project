import { Test, TestingModule } from '@nestjs/testing';
import { HistoryDataController } from './history-data.controller';

describe('HistoryDataController', () => {
  let controller: HistoryDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoryDataController]
    }).compile();

    controller = module.get<HistoryDataController>(HistoryDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
