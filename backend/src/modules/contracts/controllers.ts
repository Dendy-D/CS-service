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
} from './queries';

const getContracts = (req: Request, res: Response) => {
  pool.query(getContractsQuery, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const createContract = (req: Request, res: Response) => {
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
    (error) => {
      if (error) throw error;
      res.status(201).send('Contract has been succsessfully created');
    },
  );
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
