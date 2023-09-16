create Table car(
  id SERIAL PRIMARY KEY,
  brand VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  acceleration_in_seconds INTEGER NOT NULL,
  top_speed_in_km_per_hr INTEGER NOT NULL,
  color VARCHAR(255) NOT NULL,
  year_of_manufacture INTEGER NOT NULL,
  price_in_dollars INTEGER NOT NULL,
  engine_power_in_kw INTEGER NOT NULL,
  engine_type VARCHAR(255) NOT NULL,
  vin VARCHAR(255) NOT NULL UNIQUE,
  booked BOOLEAN NOT NULL,
  bought BOOLEAN NOT NULL,
  presence_of_faults BOOLEAN NOT NULL,
  -- preview File NOT NULL // TODO: gg
);

create Table employee(
  id SERIAL PRIMARY KEY,
  password VARCHAR(255) NOT NULL UNIQUE,
  salt VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone_number VARCHAR(255) NOT NULL UNIQUE,
  date_of_birth DATE NOT NULL,
  date_of_employment VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  salary VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  -- photo 
  -- status Status
);

create Table potential_client(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  gender VARCHAR(255) NOT NULL,
  leasing BOOLEAN NOT NULL,
  car_id INTEGER,
  FOREIGN KEY(car_id) REFERENCES car(id)
);

create Table contract(
  id SERIAL PRIMARY KEY,
  passport_code VARCHAR(255) NOT NULL UNIQUE,
  date_of_birth DATE NOT NULL,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  zipCode INTEGER NOT NULL,
  potential_client_id INTEGER UNIQUE,
  car_id INTEGER NOT NULL UNIQUE,
  employee_id INTEGER,
  FOREIGN KEY(potential_client_id) REFERENCES potential_client(id)
  FOREIGN KEY(car_id) REFERENCES car(id)
  FOREIGN KEY(employee_id) REFERENCES employee(id),
);

create Table client(
  id SERIAL PRIMARY KEY,
  contract_id INTEGER NOT NULL UNIQUE,
  FOREIGN KEY(contract_id) REFERENCES contract(id)
);

create Table test_drive(
  id SERIAL PRIMARY KEY,
  date_of_test_drive DATE NOT NULL,
  potential_client_id INTEGER UNIQUE,
  car_id INTEGER,
  employee_id INTEGER,
  FOREIGN KEY(potential_client_id) REFERENCES potential_client(id)
  FOREIGN KEY(employee_id) REFERENCES employee(id),
  FOREIGN KEY(car_id) REFERENCES car(id),
);

create Table request(
  id SERIAL PRIMARY KEY,
  employee_id INTEGER,
  content TEXT NOT NULL,
  FOREIGN KEY(employee_id) REFERENCES employee(id)
)

