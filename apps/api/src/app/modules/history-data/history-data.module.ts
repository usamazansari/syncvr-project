import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HistoryData } from './database';

import { HistoryDataController } from './controllers';
import { HistoryDataService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryData])],
  controllers: [HistoryDataController],
  providers: [HistoryDataService]
})
export class HistoryDataModule {}
