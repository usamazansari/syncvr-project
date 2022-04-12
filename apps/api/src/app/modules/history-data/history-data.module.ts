import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HistoryDataEntity } from '@syncvr-project/domain';
import { ResultDataModule } from '../result-data';

import { AppService } from '../../app.service';
import { HistoryDataController } from './controllers';
import { HistoryDataService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryDataEntity]), ResultDataModule],
  controllers: [HistoryDataController],
  providers: [AppService, HistoryDataService]
})
export class HistoryDataModule {}
