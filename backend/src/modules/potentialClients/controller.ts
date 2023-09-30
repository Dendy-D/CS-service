import { Request, Response } from 'express';
import * as crypto from 'crypto';

import pool from '../../database/db';
import {
  getPotentialClient as getPotentialClientQuery,
  addPotentialClient as addPotentialClientQuery,
  checkEmailOrPhoneNumberExists,
  getPotentialClientById as getPotentialClientByIdQuery,
  updatePotentialClient as updatePotentialClientQuery,
  deletePotentialClient as deletePotentialClientQuery,
} from './queries';

const getPotentialClient = (req: Request, res: Response) => {
  pool.query(getPotentialClientQuery, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addPotentialClient = (req: Request, res: Response) => {
  const {
    firstName: first_name,
    lastName: last_name,
    phoneNumber: phone_number,
    email,
    gender,
    leasing,
    carUid: car_uid,
  } = req.body;

  const potential_client_uid = crypto.randomUUID();

  pool.query(checkEmailOrPhoneNumberExists, [phone_number, email], (error, result) => {
    if (error) throw error;
    if (result.rows.length) {
      res.sendStatus(422);
    }
  });

  pool.query(addPotentialClientQuery,
    [
      potential_client_uid,
      first_name,
      last_name,
      phone_number,
      email,
      gender,
      leasing,
      car_uid
    ],
    (error) => {
      if (error) throw error;
      res.status(201).send('The potential client has been successfully created');
    },
  );
};

const getPotentialClientById = (req: Request, res: Response) => {
  const { id: potential_client_uid } = req.params;

  pool.query(getPotentialClientByIdQuery, [potential_client_uid], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows[0]);
  });
};

const updatePotentialClient = (req: Request, res: Response) => {
  const { id: potential_client_uid } = req.params;

  const {
    firstName: first_name,
    lastName: last_name,
    phoneNumber: phone_number,
    email,
    gender,
    leasing,
    carUid: car_uid,
  } = req.body;

  pool.query(updatePotentialClientQuery,
    [
      potential_client_uid,
      first_name,
      last_name,
      phone_number,
      email,
      gender,
      leasing,
      car_uid
    ],
    (error, result) => {
      if (error) throw error;
      res.status(200).json(result.rows[0]);
    },
  );
};

const deletePotentialClient = (req: Request, res: Response) => {
  const { id: potential_client_uid } = req.params;

  pool.query(deletePotentialClientQuery, [potential_client_uid], (error) => {
    if (error) throw error;
    res.sendStatus(204);
  });
};

export {
  getPotentialClient,
  addPotentialClient,
  getPotentialClientById,
  updatePotentialClient,
  deletePotentialClient,
};
