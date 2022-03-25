import express from 'express';
import config, { appConfig } from './src/config';
import db from './src/config/database';

const app = express();
const host = config.APP_HOST;
const port = config.PORT || 5000;
const apiVersion = config.API_VERSION;

appConfig(app);

db.connect()
  .then((obj) => {
    app.listen(port, () => {
      obj.done();
      logger.info(`Server started at ${host}:${port}/${apiVersion}/`);
    });
  })
  .catch((error) => {
    logger.error(error.message);
  });

export default app;
