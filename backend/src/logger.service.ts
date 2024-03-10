import { Injectable, Logger } from "@nestjs/common";
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class LoggerService {
    private readonly logger: Logger = new Logger();
    private readonly logLevel: string = process.env.LOG_LEVEL;
    private readonly debugLevel: string = process.env.DEBUG_LEVEL;
    private readonly errorLevel: string = process.env.ERROR_LEVEL;
    private readonly fatalLevel: string = process.env.FATAL_LEVEL;
    
    log(message: string) {
        console.log("Log Level:", this.logLevel); 
        if (this.logLevel === 'info') {
            this.logger.log({ level: "info", message });
        }
    }

    error(message: string) {
        if (this.errorLevel === 'error') {
            this.logger.error({ level: "error", message });
        }
    }

    debug(message: string) {
        if (this.debugLevel === 'debug') {
            this.logger.debug({ level: "debug", message });
        }
    }

    fatal(message: string) {
        if (this.fatalLevel === 'fatal') {
            this.logger.error({ level: "fatal", message });
        }
    }
}