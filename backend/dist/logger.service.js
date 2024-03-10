"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
dotenv.config();
let LoggerService = class LoggerService {
    constructor() {
        this.logger = new common_1.Logger();
        this.logLevel = process.env.LOG_LEVEL;
        this.debugLevel = process.env.DEBUG_LEVEL;
        this.errorLevel = process.env.ERROR_LEVEL;
        this.fatalLevel = process.env.FATAL_LEVEL;
    }
    log(message) {
        console.log("Log Level:", this.logLevel);
        if (this.logLevel === 'info') {
            this.logger.log({ level: "info", message });
        }
    }
    error(message) {
        if (this.errorLevel === 'error') {
            this.logger.error({ level: "error", message });
        }
    }
    debug(message) {
        if (this.debugLevel === 'debug') {
            this.logger.debug({ level: "debug", message });
        }
    }
    fatal(message) {
        if (this.fatalLevel === 'fatal') {
            this.logger.error({ level: "fatal", message });
        }
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate([
    (0, common_1.Injectable)()
], LoggerService);
//# sourceMappingURL=logger.service.js.map