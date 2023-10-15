import { Router } from 'express';

import {
  getCars,
  addCar,
  getCarById,
  updateCar,
  sellCar,
  setFaultyStatusForCar,
  bookCar,
  setActiveStatusForCar,
  deleteCar,
} from './controller';

const router = Router();

router.get('/', getCars);
router.post('/', addCar);
router.get('/:id', getCarById);
router.put('/:id', updateCar);
router.post('/:id/status/sold', sellCar);
router.post('/:id/status/faulty', setFaultyStatusForCar);
router.post('/:id/status/booked', bookCar);
router.post('/:id/status/active', setActiveStatusForCar);

router.delete('/:id', deleteCar); // exclusively for backend

export default router;
