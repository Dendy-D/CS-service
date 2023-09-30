import { Router } from 'express';

import {
  getAllEmployees,
  addEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from './controller';

const router = Router();

router.get('/', getAllEmployees);
router.post('/', addEmployee);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;
