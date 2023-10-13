const getContracts = 'SELECT * FROM contract';

const createContracts =
`INSERT INTO contract (
  contract_uid,
  passport_code,
  date_of_birth,
  city,
  state,
  country,
  zip_code,
  archived,
  potential_client_uid,
  car_uid,
  employee_uid
)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;

const getContractById =
`SELECT
  contract.contract_uid,
  contract.passport_code,
  contract.date_of_birth,
  contract.city,
  contract.state,
  contract.country,
  contract.zip_code,
  contract.driver_license,
  contract.archived,
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
  ) AS car,
  jsonb_build_object(
    'employee_uid', employee.employee_uid,
    'first_name', employee.first_name,
    'last_name', employee.last_name,
    'gender', employee.gender,
    'email', employee.email,
    'phone_number', employee.phone_number,
    'role', employee.role
  ) AS employee,
  jsonb_build_object(
    'potential_client_uid', potential_client.potential_client_uid,
    'first_name', potential_client.first_name,
    'last_name', potential_client.last_name,
    'phone_number', potential_client.phone_number,
    'email', potential_client.email,
    'gender', potential_client.gender,
    'leasing', potential_client.leasing
  ) AS potential_client
FROM contract
JOIN car ON contract.car_uid = car.car_uid
JOIN employee ON contract.employee_uid = employee.employee_uid
JOIN potential_client ON contract.potential_client_uid = potential_client.potential_client_uid
WHERE contract_uid = $1`;

const archiveContract =
`UPDATE contract
SET archived = true
WHERE contract_uid = $1`;

const getArchivedContracts = 'SELECT * FROM contract WHERE archived = true';

const deleteContract = 'DELETE FROM contract WHERE contract_uid = $1';

export {
  getContracts,
  createContracts,
  getContractById,
  archiveContract,
  getArchivedContracts,
  deleteContract,
};
