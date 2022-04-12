import { Test, TestingModule } from '@nestjs/testing';
import { ResultDataService } from './result-data.service';

describe('ResultDataService', () => {
  let service: ResultDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultDataService]
    }).compile();

    service = module.get<ResultDataService>(ResultDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
