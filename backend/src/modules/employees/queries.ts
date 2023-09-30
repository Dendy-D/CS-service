const getAllEmployees = 'SELECT * FROM employee';

const getEmployeeById = 'SELECT * FROM employee WHERE employee_uid = $1';

const checkPhoneNumberOrEmailExists = 'SELECT * FROM employee WHERE phone_number = $1 OR email = $2';

const addEmployee = 'INSERT INTO employee (employee_uid, hashed_password, salt, first_name, last_name, gender, email, phone_number, date_of_birth, date_of_employment, city, country, salary_in_dollars, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)';

const updateEmployee = 'UPDATE employee SET first_name = $2, last_name = $3, gender = $4, email = $5, phone_number = $6, date_of_birth = $7, date_of_employment = $8, city = $9, country = $10, salary_in_dollars = $11, role = $12 WHERE employee_uid = $1 RETURNING *';

const deleteEmployee = 'DELETE FROM employee WHERE employee_uid = $1';

export {
  getAllEmployees,
  addEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  checkPhoneNumberOrEmailExists,
};
