import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResultDataEntity } from '@syncvr-project/domain';

import { AppService } from '../../app.service';
import { ResultDataController } from './controllers';
import { ResultDataService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ResultDataEntity])],
  controllers: [ResultDataController],
  providers: [AppService, ResultDataService],
  exports: [ResultDataService]
})
export class ResultDataModule {}
