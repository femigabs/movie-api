import 'dotenv/config';

export default {
  DATABASE_URL: process.env.DATABASE_TEST_URL,
  SECRET: 'abada1234yhdfjs',
  OMDB_API_KEY: process.env.OMDB_API_KEY,
};
