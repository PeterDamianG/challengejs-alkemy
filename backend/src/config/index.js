import dotenv from 'dotenv';

dotenv.config();

export const {
  PORT,
  SECRET,
  DATABASE_URL_PROD,
  DATABASE_URL_DEV,
  DATABASE_URL_TEST,
} = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  DATABASE_URL_PROD: process.env.DATABASE_URL_PROD,
  DATABASE_URL_DEV: process.env.DATABASE_URL_DEV,
  DATABASE_URL_TEST: process.env.DATABASE_URL_TEST,
};
