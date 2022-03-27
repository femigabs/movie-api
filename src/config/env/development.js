import 'dotenv/config';

export default {
  DATABASE_URL: process.env.DATABASE_DEV_URL,
  SECRET: process.env.JWT_SECRET,
  OMDB_API_KEY: process.env.OMDB_API_KEY,
};
