import express from 'express';
import config from 'config';
import cors from 'cors';
import bodyParser from 'body-parser';

import { sequelize } from './database/db';
import Admin from './models/Admin';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// app.use('/auth', authRoutes());

const PORT = config.get('PORT') || 5001;

async function start() {
  try {
    app.get('/', (req, res) => {
      res.send('<h1>Server is runnig</h1>');
    });

    sequelize.sync();

    try {
      const admins = await Admin.findAll({ raw: true});
      admins.forEach((admin: any) => {
        console.log('project name ', admin.position);
      });
    } catch(err) {
      console.log('Oops! something went wrong: ', err);
    }

    app.listen(PORT, () => {
      console.log(`Server is runnig on: http://localhost:${PORT}`);
    });
    //TODO: should fix "any" tipe
  } catch (e: any) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();

// create table admin (
//   id UUID PRIMARY KEY NOT NULL,
//   login VARCHAR NOT NULL,
//   password VARCHAR NOT NULL,
//   fullName VARCHAR NOT NULL,
//   phoneNumber VARCHAR NOT NULL,
//   position VARCHAR NOT NULL
// );
