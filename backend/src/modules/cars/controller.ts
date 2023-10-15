import { Request, Response } from 'express';
import * as crypto from 'crypto';

import pool from '../../database/db';
import {
  getCars as getCarsQuery,
  checkVinExists,
  getCarById as getCarByIdQuery,
  addCar as addCarQuery,
  updateCar as updateCarQuery,
  updateCarStatus as updateCarStatusQuery,
  deleteCar as deleteCarQuery,
} from './queries';

const getCars = async (req: Request, res: Response) => {
  const { status } = req.query;

  let carsQuery = getCarsQuery;

  if (typeof status === 'string') {
    const statuses = status.split(',').map((elem) => `'${elem}'`);
    carsQuery += ` WHERE status IN (${statuses})`;
  }

  pool.query(carsQuery, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addCar = (req: Request, res: Response) => {
  const {
    brand,
    model,
    accelerationInSeconds: acceleration_in_seconds,
    topSpeedInKmPerHr: top_speed_in_km_per_hr,
    color,
    yearOfManufacture: year_of_manufacture,
    priceInDollars: price_in_dollars,
    enginePowerInHp: engine_power_in_hp,
    engineType: engine_type,
    vin,
  } = req.body;

  const car_uid = crypto.randomUUID();

  pool.query(checkVinExists, [vin], (error, result) => {
    if (error) throw error;
    if (result.rows.length) {
      res.sendStatus(422);
    }
  });

  pool.query(
    addCarQuery,
    [
      car_uid,
      brand,
      model,
      acceleration_in_seconds,
      top_speed_in_km_per_hr,
      color,
      year_of_manufacture,
      price_in_dollars,
      engine_power_in_hp,
      engine_type,
      vin,
    ],
    (error) => {
      if (error) throw error;
      res.status(201).send('Car has been successfully created');
    },
  );
};

const getCarById = (req: Request, res: Response) => {
  const { id } = req.params;

  pool.query(getCarByIdQuery, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const updateCar = (req: Request, res: Response) => {
  const {
    brand,
    model,
    accelerationInSeconds: acceleration_in_seconds,
    topSpeedInKmPerHr: top_speed_in_km_per_hr,
    color,
    yearOfManufacture: year_of_manufacture,
    priceInDollars: price_in_dollars,
    enginePowerInHp: engine_power_in_hp,
    engineType: engine_type,
    vin,
  } = req.body;

  const { id: car_uid } = req.params;

  pool.query(updateCarQuery,
    [
      car_uid,
      brand,
      model,
      acceleration_in_seconds,
      top_speed_in_km_per_hr,
      color,
      year_of_manufacture,
      price_in_dollars,
      engine_power_in_hp,
      engine_type,
      vin,
    ],
    (error, result) => {
      if (error) throw error;
      res.status(200).json(result.rows[0]);
    },
  );
};

const sellCar = (req: Request, res: Response) => {
  const { id: car_uid } = req.params;

  pool.query(updateCarStatusQuery, ['sold', car_uid], (error) => {
    if (error) throw error;
    res.status(200).send('The car has been sold');
  });
};

const setFaultyStatusForCar = (req: Request, res: Response) => {
  const { id: car_uid } = req.params;

  pool.query(updateCarStatusQuery, ['faulty', car_uid], (error) => {
    if (error) throw error;
    res.status(200).send('Car status has been changed to faulty');
  });
};

const bookCar = (req: Request, res: Response) => {
  const { id: car_uid } = req.params;

  pool.query(updateCarStatusQuery, ['booked', car_uid], (error) => {
    if (error) throw error;
    res.status(200).send('The car has been booked');
  });
};

const setActiveStatusForCar = (req: Request, res: Response) => {
  const { id: car_uid } = req.params;

  pool.query(updateCarStatusQuery, ['active', car_uid], (error) => {
    if (error) throw error;
    res.status(200).send('Car status has been changed to active');
  });
};

const deleteCar = (req: Request, res: Response) => {
  const { id } = req.params;

  pool.query(deleteCarQuery, [id], (error) => {
    if (error) throw error;
    res.sendStatus(204);
  });
};

export {
  getCars,
  addCar,
  getCarById,
  updateCar,
  sellCar,
  setFaultyStatusForCar,
  bookCar,
  setActiveStatusForCar,
  deleteCar,
};
