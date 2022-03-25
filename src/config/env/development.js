import 'dotenv/config';

export default {
  DATABASE_URL: process.env.DATABASE_DEV_URL,
  APP_HOST: process.env.APP_HOST,
  API_VERSION: process.env.API_VERSION,
};
