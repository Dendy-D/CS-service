import { Request, Response } from 'express';
import * as crypto from 'crypto';

import pool from '../../database/db';
import {
  getContracts as getContractsQuery,
  createContracts as createContractsQuery,
  getContractById as getContractByIdQuery,
  archiveContract as archiveContractQuery,
  getArchivedContracts as getArchivedContractsQuery,
  deleteContract as deleteContractQuery,
  getCarById as getCarByIdQuery,
  updateCarStatus as updateCarStatusQuery,
  getEmployeeById as getEmployeeByIdQuery,
} from './queries';

const getContracts = (req: Request, res: Response) => {
  pool.query(getContractsQuery, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const createContract = async (req: Request, res: Response) => {
  const {
    passportCode: passport_code,
    dateOfBirth: date_of_birth,
    city,
    state,
    country,
    zipCode: zip_code,
    driverLicense: driver_license,
    potentialClientUid: potential_client_uid,
    carUid: car_uid,
    employeeUid: employee_uid,
  } = req.body;

  const contract_uid = crypto.randomUUID();

  const car = (await pool.query(getCarByIdQuery, [car_uid])).rows[0];

  const employee = (await pool.query(getEmployeeByIdQuery, [employee_uid])).rows[0];
  // TODO: add normal error handling here

  if (car.status !== 'active' || employee.status !== 'active') {
    if (car.status !== 'active') {
      res.status(500).send('The car is not available for selling');
    }
    if (employee.status !== 'active') {
      res.status(500).send('The employee cannot be an initiator of a contract');
    }
  } else {
    pool.query(createContractsQuery,
      [
        contract_uid,
        passport_code,
        date_of_birth,
        city,
        state,
        country,
        zip_code,
        driver_license,
        potential_client_uid,
        car_uid,
        employee_uid,
      ],
      async (error) => {
        if (error) throw error;
        await pool.query(updateCarStatusQuery, ['sold', car_uid]);
        res.status(201).send('Contract has been succsessfully created');
      },
    );
  }
};

const getContractById = (req: Request, res: Response) => {
  const { id: contract_uid } = req.params;

  pool.query(getContractByIdQuery, [contract_uid], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows[0]);
  });
};

const archiveContract = (req: Request, res: Response) => {
  const { id: contract_uid } = req.params;

  pool.query(archiveContractQuery, [contract_uid], (error) => {
    if (error) throw error;
    res.status(200).send(`Contract ${contract_uid} has been successfully archived.`);
  });
};

const getArchivedContracts = (req: Request, res: Response) => {
  pool.query(getArchivedContractsQuery, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const deleteContract = (req: Request, res: Response) => {
  const { id: contract_uid } = req.params;

  pool.query(deleteContractQuery, [contract_uid], (error) => {
    if (error) throw error;
    res.sendStatus(204);
  });
};

export {
  getContracts,
  createContract,
  getContractById,
  archiveContract,
  getArchivedContracts,
  deleteContract,
};
