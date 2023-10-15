create Table car(
  car_uid UUID PRIMARY KEY,
  brand VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  acceleration_in_seconds INTEGER NOT NULL,
  top_speed_in_km_per_hr INTEGER NOT NULL,
  color VARCHAR(255) NOT NULL,
  year_of_manufacture INTEGER NOT NULL,
  price_in_dollars INTEGER NOT NULL,
  engine_power_in_hp INTEGER NOT NULL,
  engine_type VARCHAR(255) NOT NULL,
  vin VARCHAR(255) NOT NULL UNIQUE,
  status VARCHAR(255) REFERENCES car_status(status_name) DEFAULT 'active' NOT NULL
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
  salary_in_dollars INTEGER NOT NULL,
  employee_role VARCHAR(255) NOT NULL,
  status VARCHAR(255) REFERENCES employee_status(status_name) DEFAULT 'active' NOT NULL
);
-- photo 

create Table employee_status(
  status_name VARCHAR(255) PRIMARY KEY
);

create Table car_status(
  status_name VARCHAR(255) PRIMARY KEY
);

create Table potential_client(
  potential_client_uid UUID PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  gender VARCHAR(255) NOT NULL,
  leasing BOOLEAN NOT NULL,
  car_uid UUID NOT NULL,
  FOREIGN KEY(car_uid) REFERENCES car(car_uid)
);

create Table contract(
  contract_uid UUID PRIMARY KEY,
  passport_code VARCHAR(255) NOT NULL UNIQUE,
  date_of_birth DATE NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255),
  country VARCHAR(255) NOT NULL,
  zip_code INTEGER NOT NULL,
  driver_license VARCHAR(255) NOT NULL,
  archived BOOLEAN DEFAULT false,
  potential_client_uid UUID NOT NULL UNIQUE,
  car_uid UUID NOT NULL UNIQUE,
  employee_uid UUID NOT NULL UNIQUE,
  FOREIGN KEY(potential_client_uid) REFERENCES potential_client(potential_client_uid),
  FOREIGN KEY(car_uid) REFERENCES car(car_uid),
  FOREIGN KEY(employee_uid) REFERENCES employee(employee_uid)
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

