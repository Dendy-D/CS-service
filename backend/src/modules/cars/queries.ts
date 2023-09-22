const getCars = 'SELECT * FROM car';
const checkVinExists = 'SELECT * FROM car WHERE car.vin = $1';
const getCarById = 'SELECT * FROM car WHERE car_uid = $1';
const deleteCar = 'DELETE FROM car WHERE car_uid = $1';

const addCar = 'INSERT INTO car (car_uid, brand, model, acceleration_in_seconds, top_speed_in_km_per_hr, color, year_of_manufacture, price_in_dollars, engine_power_in_hp, engine_type, vin, booked, bought, presence_of_faults) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)';

const updateCar = 'UPDATE car SET brand = $2, model = $3, acceleration_in_seconds = $4, top_speed_in_km_per_hr = $5, color = $6, year_of_manufacture = $7, price_in_dollars = $8, engine_power_in_hp = $9, engine_type = $10, vin = $11, booked = $12, bought = $13, presence_of_faults = $14 WHERE car_uid = $1 RETURNING *';

export {
  getCars,
  checkVinExists,
  getCarById,
  addCar,
  deleteCar,
  updateCar,
};
