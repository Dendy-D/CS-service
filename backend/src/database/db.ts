import { Sequelize } from 'sequelize';
import config from 'config';

import { testConnectionToDataBase } from '../utils/db-helper';
const DB_NAME: string = config.get('DB_NAME');
const DB_USERNAME: string = config.get('DB_USERNAME');
const DB_PASSWORD: string = config.get('DB_PASSWORD');
const DB_HOST_NAME: string = config.get('DB_HOST_NAME');
const DB_PORT_NAME: number = config.get('DB_PORT_NAME');

export const sequelize = new Sequelize(DB_USERNAME, DB_NAME, DB_PASSWORD, {
  host: DB_HOST_NAME,
  dialect: 'postgres',
  port: DB_PORT_NAME,
  define: {
    timestamps: false
  }
});

testConnectionToDataBase(sequelize);
