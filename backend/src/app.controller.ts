import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
 import { LoggerService } from './logger.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,  private readonly loggerService: LoggerService,) {}

  @Get()
  getinfo(): string {
   /*  this.Logger.log("This is a log message")
    this.Logger.error("This is a error message")
    this.Logger.debug("This is a debug message")
    this.Logger.fatal("This is a fatal message") */
    return this.appService.getinfo();
  }
  @Get('info')
  getInfo(): string {
    this.loggerService.log('This is an info message');
    return 'This is an info message';
  }

  @Get('debug')
  getDebug(): string {
    this.loggerService.debug('This is a debug message');
    return 'This is a debug message';
  }

  @Get('error')
  getError(): string {
    this.loggerService.error('This is an error message');
    return 'This is an error message';
  }

  @Get('fatal')
  getFatal(): string {
    this.loggerService.fatal('This is a fatal message');
    return 'This is a fatal message';
  }
}