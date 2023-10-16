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
  getCarById as getCarByIdQuery,
  updateCarStatus as updateCarStatusQuery,
} from './queries';

const getPotentialClient = (req: Request, res: Response) => {
  pool.query(getPotentialClientQuery, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addPotentialClient = async (req: Request, res: Response) => {
  const {
    firstName: first_name,
    lastName: last_name,
    phoneNumber: phone_number,
    email,
    gender,
    leasing,
    carUid: car_uid,
  } = req.body;

  pool.query(checkEmailOrPhoneNumberExists, [phone_number, email], (error, result) => {
    if (error) throw error;
    if (result.rows.length) {
      res.sendStatus(422);
    }
  });

  const car = (await pool.query(getCarByIdQuery, [car_uid])).rows[0];

  // TODO: add normal error handling here

  if (car.status !== 'active') {
    res.status(500).send('The car is not available for booking');
  } else {
    const potential_client_uid = crypto.randomUUID();

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
      async (error) => {
        if (error) throw error;
        await pool.query(updateCarStatusQuery, ['booked', car_uid]);
        res.status(201).send('Potential client has been successfully created');
      },
    );
  }

  console.log(car);
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
