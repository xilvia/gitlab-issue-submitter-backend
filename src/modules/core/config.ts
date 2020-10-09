import * as dotenv from 'dotenv';
import { IGitLabUrlConfigs } from './config.interface';

dotenv.config();

export const urlConfig: IGitLabUrlConfigs = {
  development: {
    apiUrl: process.env.API_URL,
    authUrl: process.env.AUTH_URL,
  },
  test: {
    apiUrl: process.env.API_URL,
    authUrl: process.env.AUTH_URL,
  },
  production: {
    apiUrl: process.env.API_URL,
    authUrl: process.env.AUTH_URL,
  },
};
