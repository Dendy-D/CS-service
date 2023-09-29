import { Router } from 'express';

import {
  getAllEmployees,
  addNewEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from './controller';

const router = Router();

router.get('/', getAllEmployees);
router.post('/', addNewEmployee);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;
