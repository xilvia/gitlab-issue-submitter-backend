import * as dotenv from 'dotenv';
import { IGitLabUrlConfigs } from './config.interface';

dotenv.config();

export const urlConfig: IGitLabUrlConfigs = {
  development: {
    authUrl: process.env.AUTH_URL,
  },
  test: {
    authUrl: process.env.AUTH_URL,
  },
  production: {
    authUrl: process.env.AUTH_URL,
  },
};
