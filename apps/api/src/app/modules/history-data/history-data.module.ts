import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HistoryEntity } from '@syncvr-project/domain';
import { ResultDataModule } from '../result-data';

import { AppService } from '../../app.service';
import { HistoryDataController } from './controllers';
import { HistoryDataService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryEntity]), ResultDataModule],
  controllers: [HistoryDataController],
  providers: [AppService, HistoryDataService]
})
export class HistoryDataModule {}
