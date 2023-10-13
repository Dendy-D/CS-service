const getPotentialClient = 'SELECT * FROM potential_client';

const checkEmailOrPhoneNumberExists = 'SELECT * FROM potential_client WHERE phone_number = $1 OR email = $2';

const addPotentialClient = 'INSERT INTO potential_client (potential_client_uid, first_name, last_name, phone_number, email, gender, leasing, car_uid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';

const getPotentialClientById = 'SELECT * FROM potential_client WHERE potential_client_uid = $1';

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