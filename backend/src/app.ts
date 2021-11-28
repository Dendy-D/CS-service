import express from 'express';

const app = express();

const PORT = process.env.port || 5000;

async function start() {
  try {
    app.get('/', (req, res) => {
      res.send('<h1>Server is runnig</h1>');
    });

    app.listen(PORT, () => {
      console.log(`Server is runnig on: http://localhost:${PORT}`);
    });
  } catch (e: any) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();

