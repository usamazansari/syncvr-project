import { Module, OnModuleDestroy } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { HistoryEntity, ResultEntity } from '@syncvr-project/domain';

import { HistoryDataModule } from './modules/history-data';
import { ResultDataModule } from './modules/result-data';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'sqlite',
        database: './database.sqlite',
        entities: [HistoryEntity, ResultEntity],
        synchronize: true,
        autoLoadEntities: true,
        logging: 'all'
      })
    }),
    HistoryDataModule,
    ResultDataModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule implements OnModuleDestroy {
  constructor(private readonly _connection: Connection) {}

  onModuleDestroy(): void {
    this._connection.close();
  }
}
