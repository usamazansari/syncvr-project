import { Module, OnModuleDestroy } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
    ConfigModule.forRoot({
      //   envFilePath: [
      //     '.env.development.local',
      //     '.env.development',
      //     '.env.local',
      //     '.env'
      //   ]
    }),
    // TypeOrmModule.forRootAsync({
    //   useFactory: (): ConnectionOptions => ({
    //     type: 'postgres',
    //     host: 'localhost',
    //     port: 5432,
    //     database: 'postgres',
    //     username: 'postgres',
    //     password: 'postgres',
    //     entities: [HistoryEntity, ResultEntity],
    //     synchronize: true,
    //     logging: 'all'
    //   })
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): ConnectionOptions => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        // host: configService.get('HOST'),
        // port: +configService.get('PORT'),
        username: configService.get('USERNAME'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
        entities: [HistoryEntity, ResultEntity],
        synchronize: true,
        logging: 'all'
      }),
      inject: [ConfigService]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web-frontend'),
      exclude: ['/api/**']
    }),
    HistoryModule,
    ResultModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule implements OnModuleDestroy {
  constructor(private readonly _connection: Connection) {
    console.log('AppModule');
    console.log({ env: process.env });
    console.log(process.env.DATABASE_URL);
  }

  onModuleDestroy(): void {
    this._connection.close();
  }
}
