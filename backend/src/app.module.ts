import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* import { LoggerService } from './logger.service'; */
import * as dotenv from 'dotenv';
import { LoggerService } from './logger.service';
dotenv.config();




@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
