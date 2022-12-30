import { createLogger, transports, format } from "winston";
import  DailyRotateFile from 'winston-daily-rotate-file';


  const transportError: DailyRotateFile = new DailyRotateFile({
    filename: 'logs/error-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    level: 'error',
    maxSize: '20m',
    maxFiles: '30d'
  });

  const transportInfo: DailyRotateFile = new DailyRotateFile({
    filename: 'logs/combinado-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    level: 'info',
    maxSize: '20m',
    maxFiles: '30d'
  });
  
const logger = createLogger({
    level: 'info',
    format: format.json(),
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
      new transports.Console({ level: 'info' }),
    ],
  });

  export default logger;