import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import crypto from 'crypto';

import pool from '../../database/db';
import {
  getAllEmployees as getAllEmployeesQuery,
  addNewEmployee as addNewEmployeeQuery,
  checkEmailExists,
  checkPhoneNumberExists,
  getEmployeeById as getEmployeeByIdQuery,
  updateEmployee as updateEmployeeQuery,
  deleteEmployee as deleteEmployeeQuery,
} from './queries';

const getAllEmployees = (req: Request, res: Response) => {
  pool.query(getAllEmployeesQuery, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addNewEmployee = async (req: Request, res: Response) => {
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
    role,
  } = req.body;

  const employee_uid = crypto.randomUUID();

  const generatedPassword = Math.random().toString(36).slice(-10);

  const salt = await bcrypt.genSalt();
  const hashed_password = await bcrypt.hash(generatedPassword, salt);

  pool.query(checkEmailExists, [email, employee_uid], (error, result) => {
    if (error) throw error;
    if (result.rows.length) {
      res.sendStatus(422);
    }
  });

  pool.query(checkPhoneNumberExists, [phone_number, employee_uid], (error, result) => {
    if (error) throw error;
    if (result.rows.length) {
      res.sendStatus(422);
    }
  });

  pool.query(
    addNewEmployeeQuery,
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
      role,
    ],
    (error) => {
      if (error) throw error;
      res.status(201).send('The employee has been successfully created');
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

const updateEmployee = async (req: Request, res: Response) => {
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
    role,
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
      role,
    ],
    (error, result) => {
      if (error) throw error;
      res.status(200).send('The employee information has been successfully updated');
    },
  );
};

const deleteEmployee = (req: Request, res: Response) => {
  const { id: employee_uid } = req.params;

  pool.query(deleteEmployeeQuery, [employee_uid], (error, result) => {
    if (error) throw error;
    res.sendStatus(204);
  });
};

export {
  getAllEmployees,
  addNewEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
