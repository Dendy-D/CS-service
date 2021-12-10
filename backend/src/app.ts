import express from 'express';
import config from 'config';

const app = express();

const PORT = config.get('PORT') || 5001;

async function start() {
  try {
    app.get('/', (req, res) => {
      res.send('<h1>Server is runnig</h1>');
    });

    app.listen(PORT, () => {
      console.log(`Server is runnig on: http://localhost:${PORT}`);
    });
    //TODO: should fix "any" tipe
  // } catch (e: any) {
  //   console.log('Server Error', e.message);
  //   process.exit(1);
  // }
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
