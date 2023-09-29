create Table car(
  car_uid UUID PRIMARY KEY,
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
  presence_of_faults BOOLEAN NOT NULL
);
-- preview File NOT NULL

create Table employee(
  employee_uid UUID PRIMARY KEY,
  hashed_password VARCHAR(255) NOT NULL,
  salt VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone_number VARCHAR(255) NOT NULL UNIQUE,
  date_of_birth DATE NOT NULL,
  date_of_employment DATE NOT NULL,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  salary_in_dollars VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL
);
-- photo 
-- status Status

create Table potential_client(
  potential_client_uid UUID PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  gender VARCHAR(255) NOT NULL,
  leasing BOOLEAN NOT NULL,
  car_uid INTEGER,
  FOREIGN KEY(car_uid) REFERENCES car(car_uid)
);

create Table contract(
  contract_uid UUID PRIMARY KEY,
  passport_code VARCHAR(255) NOT NULL UNIQUE,
  date_of_birth DATE NOT NULL,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  zipCode INTEGER NOT NULL,
  potential_client_uid INTEGER UNIQUE,
  car_uid INTEGER NOT NULL UNIQUE,
  employee_uid INTEGER,
  FOREIGN KEY(potential_client_uid) REFERENCES potential_client(potential_client_uid)
  FOREIGN KEY(car_uid) REFERENCES car(car_uid)
  FOREIGN KEY(employee_uid) REFERENCES employee(employee_uid),
);

create Table client(
  client_uid UUID PRIMARY KEY,
  contract_uid INTEGER NOT NULL UNIQUE,
  review TEXT NOT NULL;
  FOREIGN KEY(contract_uid) REFERENCES contract(contract_uid)
);

create Table test_drive(
  test_drive_uid UUID PRIMARY KEY,
  date_of_test_drive DATE NOT NULL,
  potential_client_uid INTEGER UNIQUE,
  car_uid INTEGER,
  employee_uid INTEGER,
  FOREIGN KEY(potential_client_uid) REFERENCES potential_client(potential_client_uid)
  FOREIGN KEY(employee_uid) REFERENCES employee(employee_uid),
  FOREIGN KEY(car_uid) REFERENCES car(car_uid),
);

create Table request(
  request_uid UUID PRIMARY KEY,
  employee_uid INTEGER,
  content TEXT NOT NULL,
  FOREIGN KEY(employee_uid) REFERENCES employee(employee_uid)
)

