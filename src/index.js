import express from 'express';
import { config, appConfig, db } from './config';
import Logger from './config/logger';

const app = express();
const port = config.PORT || 5000;

const logger = Logger.createLogger({ label: 'Movie' });
global.logger = logger;

appConfig(app);

db.connect()
  .then((obj) => {
    logger.info('Database connected successfully');
    app.listen(port, () => {
      obj.done();
      logger.info(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    logger.error(error.message);
  });

export default app;
