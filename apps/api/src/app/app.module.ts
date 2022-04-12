import { Module, OnModuleDestroy } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { HistoryDataModule, HistoryData } from './modules';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'sqlite',
        database: './database.sqlite',
        entities: [HistoryData],
        synchronize: true,
        autoLoadEntities: true,
        logging: 'all'
      })
    }),
    HistoryDataModule
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
