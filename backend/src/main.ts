import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from '@nestjs/common'
import * as dotenv from 'dotenv';
dotenv.config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
   /*   logger: process.env.NODE_ENV === 'development' ? ['log', 'debug', 'error', 'fatal'] : ['error'], */ 
  });
  
  const port = 3000;
  await app.listen(port);
  Logger.log(`das Application läuft auf port ${port}`);


}
bootstrap();
