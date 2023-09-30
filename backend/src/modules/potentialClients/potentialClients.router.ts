import Router from 'express';

import {
  getPotentialClient,
  addPotentialClient,
  getPotentialClientById,
  updatePotentialClient,
  deletePotentialClient,
} from './controller';

const router = Router();

router.get('/', getPotentialClient);
router.post('/', addPotentialClient);
router.get('/:id', getPotentialClientById);
router.put('/:id', updatePotentialClient);
router.delete('/:id', deletePotentialClient);

export default router;
