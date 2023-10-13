import express from 'express';
import cors from 'cors';

import carsRouter from './modules/cars';
import employeesRouter from './modules/employees';
import potentialClientsRouter from './modules/potentialClients';
import contractsRouter from './modules/contracts';

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const start = () => {
  try {
    app.get('/', (req, res) => {
      res.send('fuck you');
    });

    app.use('/api/v1/cars', carsRouter);
    app.use('/api/v1/employees', employeesRouter);
    app.use('/api/v1/potential-clients', potentialClientsRouter);
    app.use('/api/v1/contracts', contractsRouter);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch(e) {
    console.error(e);
  }
};

start();
