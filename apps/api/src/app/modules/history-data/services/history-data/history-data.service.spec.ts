import { Test, TestingModule } from '@nestjs/testing';
import { HistoryDataService } from './history-data.service';

describe('HistoryDataService', () => {
  let service: HistoryDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoryDataService]
    }).compile();

    service = module.get<HistoryDataService>(HistoryDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
