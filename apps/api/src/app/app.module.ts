import { Module, OnModuleDestroy } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, ConnectionOptions } from 'typeorm';

import { HistoryEntity, ResultEntity } from '@syncvr-project/domain';

import { HistoryModule } from './modules/history';
import { ResultModule } from './modules/result';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (): ConnectionOptions => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        username: 'postgres',
        password: 'postgres',
        entities: [HistoryEntity, ResultEntity],
        synchronize: true,
        logging: 'all'
      })
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'web-frontend')
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
