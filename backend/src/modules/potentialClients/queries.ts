const getPotentialClient = 'SELECT * FROM potential_client';

const checkEmailOrPhoneNumberExists = 'SELECT * FROM potential_client WHERE phone_number = $1 OR email = $2';

const addPotentialClient = 'INSERT INTO potential_client (potential_client_uid, first_name, last_name, phone_number, email, gender, leasing, car_uid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';

const getPotentialClientById =
`SELECT
  potential_client_uid,
  first_name,
  last_name,
  phone_number,
  email,
  gender,
  leasing,
  jsonb_build_object(
    'car_uid', car.car_uid,
    'brand', car.brand,
    'model', car.model,
    'acceleration_in_seconds', car.acceleration_in_seconds,
    'top_speed_in_km_per_hr', car.top_speed_in_km_per_hr,
    'color', car.color,
    'year_of_manufacture', car.year_of_manufacture,
    'price_in_dollars', car.price_in_dollars,
    'engine_power_in_hp', car.engine_power_in_hp,
    'engine_type', car.engine_type,
    'vin', car.vin,
    'booked', car.booked,
    'bought', car.bought,
    'presence_of_faults', car.presence_of_faults
  ) AS car
FROM potential_client
JOIN car ON potential_client.car_uid = car.car_uid
WHERE potential_client_uid = $1
`;

const updatePotentialClient = 'UPDATE potential_client SET first_name = $2, last_name = $3, phone_number = $4, email = $5, gender = $6, leasing = $7, car_uid = $8 WHERE potential_client_uid = $1 RETURNING *';

const deletePotentialClient = 'DELETE FROM potential_client WHERE potential_client_uid = $1';

export {
  getPotentialClient,
  addPotentialClient,
  checkEmailOrPhoneNumberExists,
  getPotentialClientById,
  updatePotentialClient,
  deletePotentialClient,
};
