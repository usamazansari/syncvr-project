import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResultEntity } from '@syncvr-project/domain';

import { AppService } from '../../app.service';
import { ResultController } from './controllers';
import { ResultService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ResultEntity])],
  controllers: [ResultController],
  providers: [AppService, ResultService],
  exports: [ResultService]
})
export class ResultModule {}
