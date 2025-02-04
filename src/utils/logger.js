const { createLogger, format, transports, info } = require('winston');
const { combine, timestamp, printf, errors } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    errors({ stack: true }), // logs error stack
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: '../logs/error.log', level: 'error' }),
    new transports.File({ filename: '../logs/combined.log' }),
  ],
});

module.exports = logger;
