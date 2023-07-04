import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from '../config';
import { ReportsModule } from './reports/reports.module';
import { PingController } from './ping.controller';

@Module({
  imports: [
    ReportsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
      load: [config],
    }),
  ],
  controllers: [PingController],
})
export class APIModule {}
