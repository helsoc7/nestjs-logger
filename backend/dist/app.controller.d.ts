import { AppService } from './app.service';
import { LoggerService } from './logger.service';
export declare class AppController {
    private readonly appService;
    private readonly loggerService;
    constructor(appService: AppService, loggerService: LoggerService);
    getinfo(): string;
    getInfo(): string;
    getDebug(): string;
    getError(): string;
    getFatal(): string;
}
