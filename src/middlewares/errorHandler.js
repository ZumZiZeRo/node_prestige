const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.message, err);

  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';

  res.status(statusCode).json({
    status: status,
    message: err.message,
    // add stack trace only in development environment
    stack: process.env.NODE_ENV === 'development' ? err.stack : null,
  });
};

module.exports = errorHandler;
