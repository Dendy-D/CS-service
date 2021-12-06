import express from 'express';
import config from 'config';

const app = express();

const PORT = config.get('PORT') || 5000;

async function start() {
  try {
    app.get('/', (req, res) => {
      res.send('<h1>Server is runnig</h1>');
    });

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
