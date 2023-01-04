"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const transportError = new winston_daily_rotate_file_1.default({
    filename: 'logs/error-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    level: 'error',
    maxSize: '20m',
    maxFiles: '30d'
});
const transportInfo = new winston_daily_rotate_file_1.default({
    filename: 'logs/combinado-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    level: 'info',
    maxSize: '20m',
    maxFiles: '30d'
});
const logger = (0, winston_1.createLogger)({
    level: 'info',
    format: winston_1.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        transportError,
        transportInfo,
        //new transports.File({ filename: 'logs/error.log', level: 'error' }),
        //new transports.File({ filename: 'logs/combined.log' }),
        new winston_1.transports.Console({ level: 'info' }),
    ],
});
exports.default = logger;
