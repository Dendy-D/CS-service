import express from 'express';
import config from 'config';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import authRoutes from './modules/auth/routes';
// import { sequelize } from './database/db';
import Admin from './models/Admin';

dotenv.config();

const start = async () => {
  try {
    const app = express();
    const PORT = config.get('PORT') || 5001;

    app.use(cors());
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

    // app.use('/auth', authRoutes());

    app.get('/', (req, res) => {
      res.send('<h1>Server is runnig</h1>');
    });

    // sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server is runnig on: http://localhost:${PORT}`);
    });

    //TODO: should fix "any" tipe
  } catch (e: any) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
};

start();

// create table admin (
//   id UUID PRIMARY KEY NOT NULL,
//   login VARCHAR NOT NULL,
//   password VARCHAR NOT NULL,
//   fullName VARCHAR NOT NULL,
//   phoneNumber VARCHAR NOT NULL,
//   position VARCHAR NOT NULL
// );
