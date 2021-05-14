import pkg from '@prisma/client';
import {
  DATABASE_URL_PROD,
  DATABASE_URL_DEV,
  DATABASE_URL_TEST,
} from './index.js';

const { PrismaClient } = pkg;
/* istanbul ignore next */
const setEnvironment = () => {
  // PRODUCTION
  if (process.env.NODE_ENV === 'production') {
    return new PrismaClient({
      datasources: {
        db: {
          url: DATABASE_URL_PROD,
        },
      },
    });
  }
  // DEVELOPMENT
  if (process.env.NODE_ENV === 'development') {
    return new PrismaClient({
      datasources: {
        db: {
          url: DATABASE_URL_DEV,
        },
      },
      log: ['query', 'info', 'warn', 'error'],
    });
  }
  // TEST
  if (process.env.NODE_ENV === 'test') {
    return new PrismaClient({
      datasources: {
        db: {
          url: DATABASE_URL_TEST,
        },
      },
      log: ['query', 'info', 'warn', 'error'],
    });
  }
  // DEFAULT - DEVELOPMENT
  return new PrismaClient({
    datasources: {
      db: {
        url: DATABASE_URL_DEV,
      },
    },
    log: ['query', 'info', 'warn', 'error'],
  });
};

const prisma = setEnvironment();

export default prisma;
