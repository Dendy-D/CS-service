import { Router } from 'express';

import {
  getContracts,
  createContract,
  getContractById,
  archiveContract,
  getArchivedContracts,
  deleteContract,
} from './controllers';

const router = Router();

router.get('/', getContracts);
router.post('/', createContract);
router.get('/archived', getArchivedContracts);
router.get('/:id', getContractById);
router.post('/:id/archived', archiveContract);

router.delete('/:id', deleteContract); // exclusively for backend

export default router;
