import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResultEntity } from '@syncvr-project/domain';

import { AppService } from '../../app.service';
import { ResultDataController } from './controllers';
import { ResultDataService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ResultEntity])],
  controllers: [ResultDataController],
  providers: [AppService, ResultDataService],
  exports: [ResultDataService]
})
export class ResultDataModule {}
