import { Request, Response } from 'express';
import * as crypto from 'crypto';

import pool from '../../database/db';
import {
  getCars as getCarsQuery,
  checkVinExists,
  getCarById as getCarByIdQuery,
  addCar as addCarQuery,
  deleteCar as deleteCarQuery,
  updateCar as updateCarQuery,
} from './queries';

const getCars = async (req: Request, res: Response) => {
  pool.query(getCarsQuery, (error, result) => {
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
    booked,
    bought,
    presenceOfFaults: presence_of_faults,
  } = req.body;

  const car_uid = crypto.randomUUID();

  pool.query(checkVinExists, [vin], (error, result) => {
    if (error) throw error;
    if (result.rows.length) {
      res.send(401);
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
      booked,
      bought,
      presence_of_faults,
    ],
    (error, result) => {
      if (error) throw error;
      res.status(201).send('The car has been successfully created');
      console.log(result);
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
    booked,
    bought,
    presenceOfFaults: presence_of_faults,
  } = req.body;

  const { id: car_uid } = req.params;

  console.log(car_uid);

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
      booked,
      bought,
      presence_of_faults,
    ],
    (error, result) => {
      if (error) throw error;

      console.log(result);

      res.status(200).json(result.rows[0]);
    },
  );
};

const deleteCar = (req: Request, res: Response) => {
  const { id } = req.params;

  pool.query(deleteCarQuery, [id], (error, result) => {
    if (error) throw error;
    res.status(204).send('');
  });
};

export {
  getCars,
  addCar,
  getCarById,
  updateCar,
  deleteCar
};
