const getAllEmployees = 'SELECT * FROM employee';
const getEmployeeById = 'SELECT * FROM employee WHERE employee.employee_uid = $1';

const checkEmailExists = 'SELECT * FROM employee WHERE email = $1 AND employee_uid != $2';
const checkPhoneNumberExists = 'SELECT * FROM employee WHERE phone_number = $1 AND employee_uid != $2';

const checkPhoneNumberOrEmailExists = 'SELECT * FROM employee WHERE email = $1 OR phone_number = $2 AND employee_uid = $3';

const addNewEmployee = 'INSERT INTO employee (employee_uid, hashed_password, salt, first_name, last_name, gender, email, phone_number, date_of_birth, date_of_employment, city, country, salary_in_dollars, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)';

const updateEmployee = 'UPDATE employee SET first_name = $2, last_name = $3, gender = $4, email = $5, phone_number = $6, date_of_birth = $7, date_of_employment = $8, city = $9, country = $10, salary_in_dollars = $11, role = $12 WHERE employee.employee_uid = $1';

const deleteEmployee = 'DELETE FROM employee WHERE employee_uid = $1';

export {
  getAllEmployees,
  addNewEmployee,
  checkEmailExists,
  checkPhoneNumberExists,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  checkPhoneNumberOrEmailExists,
};
