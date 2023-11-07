import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import crypto from 'crypto';

import pool from '../../../database/db';
import {
  getAllEmployees as getAllEmployeesQuery,
  addEmployee as addEmployeeQuery,
  getEmployeeById as getEmployeeByIdQuery,
  updateEmployee as updateEmployeeQuery,
  checkPhoneNumberOrEmailExists,
  updateEmployeeStatus as updateEmployeeStatusQuery,
  deleteEmployee as deleteEmployeeQuery,
} from './queries';

const getAllEmployees = (req: Request, res: Response) => {
  const { status } = req.query;

  let employeesQuery = getAllEmployeesQuery;

  if (typeof status === 'string') {
    const statuses = status.split(',').map((elem) => `'${elem}'`);
    employeesQuery += ` WHERE status IN (${statuses})`;
  }

  pool.query(employeesQuery, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addEmployee = async (req: Request, res: Response) => {
  const {
    firstName: first_name,
    lastName: last_name,
    gender,
    email,
    phoneNumber: phone_number,
    dateOfBirth: date_of_birth,
    dateOfEmployment: date_of_employment,
    city,
    country,
    salaryInDollars: salary_in_dollars,
    employeeRole: employee_role,
  } = req.body;

  const employee_uid = crypto.randomUUID();

  const generatedPassword = Math.random().toString(36).slice(-10);

  const salt = await bcrypt.genSalt();
  const hashed_password = await bcrypt.hash(generatedPassword, salt);

  pool.query(checkPhoneNumberOrEmailExists, [phone_number, email], (error, result) => {
    if (error) throw error;
    if (result.rows.length) {
      res.sendStatus(422);
    }
  });

  pool.query(
    addEmployeeQuery,
    [
      employee_uid,
      hashed_password,
      salt,
      first_name,
      last_name,
      gender,
      email,
      phone_number,
      date_of_birth,
      date_of_employment,
      city,
      country,
      salary_in_dollars,
      employee_role,
    ],
    (error) => {
      if (error) throw error;
      res.status(201).send('Employee has been successfully created');
    }
  );
};

const getEmployeeById = (req: Request, res: Response) => {
  const { id } = req.params;
  pool.query(getEmployeeByIdQuery, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows[0]);
  });
};

const updateEmployee = (req: Request, res: Response) => {
  const { id: employee_uid } = req.params;

  const {
    firstName: first_name,
    lastName: last_name,
    gender,
    email,
    phoneNumber: phone_number,
    dateOfBirth: date_of_birth,
    dateOfEmployment: date_of_employment,
    city,
    country,
    salaryInDollars: salary_in_dollars,
    employeeRole: employee_role,
  } = req.body;

  pool.query(updateEmployeeQuery,
    [
      employee_uid,
      first_name,
      last_name,
      gender,
      email,
      phone_number,
      date_of_birth,
      date_of_employment,
      city,
      country,
      salary_in_dollars,
      employee_role,
    ],
    (error, result) => {
      if (error) throw error;
      res.status(200).json(result.rows[0]);
    },
  );
};

const fireEmployee = (req: Request, res: Response) => {
  const { id: employee_uid } = req.params;

  pool.query(updateEmployeeStatusQuery, ['fired', employee_uid], (error) => {
    if (error) throw error;
    res.status(200).send('The employee has been fired');
  });
};

const setVacationStatusForEmployee = (req: Request, res: Response) => {
  const { id: employee_uid } = req.params;

  pool.query(updateEmployeeStatusQuery, ['vacation', employee_uid], (error) => {
    if (error) throw error;
    res.status(200).send('Employee status has been changed to vacation');
  });
};

const setActiveStatusForEmployee = (req: Request, res: Response) => {
  const { id: employee_uid } = req.params;

  // Consider adding a limitaion in change status to active from fired

  pool.query(updateEmployeeStatusQuery, ['active', employee_uid], (error) => {
    if (error) throw error;
    res.status(200).send('Employee status has been changed to active');
  });
};

const deleteEmployee = (req: Request, res: Response) => {
  const { id: employee_uid } = req.params;

  pool.query(deleteEmployeeQuery, [employee_uid], (error) => {
    if (error) throw error;
    res.sendStatus(204);
  });
};

export {
  getAllEmployees,
  addEmployee,
  getEmployeeById,
  updateEmployee,
  fireEmployee,
  setVacationStatusForEmployee,
  setActiveStatusForEmployee,
  deleteEmployee,
};
