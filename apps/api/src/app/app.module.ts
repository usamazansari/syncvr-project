import { Module, OnModuleDestroy } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { HistoryEntity, ResultEntity } from '@syncvr-project/domain';

import { HistoryModule } from './modules/history';
import { ResultModule } from './modules/result';

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
    HistoryModule,
    ResultModule
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
