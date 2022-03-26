import express from 'express';
import config, { appConfig } from './config';
import db from './config/database';
import Logger from './config/logger';

const app = express();
const host = config.APP_HOST;
const port = config.PORT || 5000;

const logger = Logger.createLogger({ label: 'Movie' });
global.logger = logger;

appConfig(app);

db.connect()
  .then((obj) => {
    logger.info('Database connected successfully');
    app.listen(port, () => {
      obj.done();
      logger.info(`Server started at ${host}:${port}/`);
    });
  })
  .catch((error) => {
    logger.error(error.message);
  });

export default app;
