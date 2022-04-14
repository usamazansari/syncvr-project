import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HistoryEntity } from '@syncvr-project/domain';
import { ResultModule } from '../result';

import { AppService } from '../../app.service';
import { HistoryController } from './controllers';
import { HistoryService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryEntity]), ResultModule],
  controllers: [HistoryController],
  providers: [AppService, HistoryService]
})
export class HistoryModule {}
