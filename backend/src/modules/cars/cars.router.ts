import { Router } from 'express';

import {
  getCars,
  addCar,
  getCarById,
  updateCar,
  deleteCar
} from './controller';

const router = Router();

router.get('/', getCars);
router.post('/', addCar);
router.put('/:id', updateCar);
router.get('/:id', getCarById);
router.delete('/:id', deleteCar);

export default router;
