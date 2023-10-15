import { Router } from 'express';

import {
  getAllEmployees,
  addEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  fireEmployee,
  setVacationStatusForEmployee,
  setActiveStatusForEmployee,
} from './controller';

const router = Router();

router.get('/', getAllEmployees);
router.post('/', addEmployee);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployee);
router.post('/:id/status/fired', fireEmployee);
router.post('/:id/status/vacation', setVacationStatusForEmployee);
router.post('/:id/status/active', setActiveStatusForEmployee);

router.delete('/:id', deleteEmployee); // exclusively for backend

export default router;
