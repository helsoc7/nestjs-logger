export declare class LoggerService {
    private readonly logger;
    private readonly logLevel;
    private readonly debugLevel;
    private readonly errorLevel;
    private readonly fatalLevel;
    log(message: string): void;
    error(message: string): void;
    debug(message: string): void;
    fatal(message: string): void;
}
