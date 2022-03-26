import 'dotenv/config';

export default {
  DATABASE_URL: process.env.DATABASE_DEV_URL,
  APP_HOST: process.env.APP_HOST,
  SECRET: process.env.JWT_SECRET,
};
