# CarsSelling
Visual database for employees on a car sales website

## Use-case diagram

![use-case](/assets/use-case_1.2.png)

## REST API

```http
/employees
  GET /employees
  GET /employees/:id
  POST /employees
  PUT /employees/:id

  DELETE /employees/:id (backend only)

  POST /employees/{id}/status

/cars
  GET /cars
  GET /cars/:id
  POST /cars
  PUT /cars/:id
  DELETE /cars/:id
	
/test-drives
  GET /test-drives
  GET /test-drives/:id
  POST /test-drives
  PUT /test-drives/:id
  DELETE /test-drives/:id

/potential-clients
  GET /potential-clients
  GET /potential-clients/:id
  POST /potential-clients
  PUT /potential-clients/:id
  DELETE /potential-clients/:id

/clients
  GET /clients
  GET /clients/:id
  POST /clients
  PUT /clients/:id
  DELETE /clients/:id

/requests
  GET /requests
  GET /requests/:id
  POST /requests
  PUT /requests/:id
  DELETE /requests/:id

/contracts
  GET /contracts
  GET /contracts/:id
  POST /contracts

  DELETE /contracts/:id (backend only)

```

## Models

```ts
interface Car {
  id: string,
  brand: string,
  model: string,
  accelerationInSeconds: number,
  topSpeedInKmPerHr: number,
  color: string,
  yearOfManufacture: number,
  priceInDollars: number,
  enginePowerInHp: number,
  engineType: EngineType,
  vin: string,
  booked: boolean,
  bought: boolean,
  presenceOfFaults: boolean,
  // preview: File,
}

interface Employee {
  id: string,
  password: string,
  firstName: string,
  lastName: string,
  gender: Gender,
  email: string,
  phoneNumber: string,
  dateOfBirth: Date,
  dateOfEmployment: Date,
  city: string,
  country: string,
  salaryInDollars: number,
  role: Role,
  // status: Status, ??????
  // photo
}

interface Client {
  id: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  gender: Gender,
  leasing: boolean,
  car: Car,
}

interface PotentialClient extends Client {}

interface ClientWhoBoughtCar extends Client {
  contractOfSale: ContractOfSale,
}

interface TestDrive {
  id: string,
  client: PotentialClient,
  car: Car,
  employee: Employee,
  date: Date,
}

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

interface ContractOfSale {
  id: string,
  passportCode: string,
  dateOfBirth: Date,
  city: string,
  state: string,
  country: string,
  zipCode: number,
  driverLicense: string,
  archived: boolean,
  client: PotentialClient,
  car: Car,
  employee: Employee,
}

interface EngineType {
  'gasoline' | 'diesel' | 'electric'
}

interface Role {
  'administrator' | 'seller' | 'engineer' | 'test-driver' | 'system-administrator' | 'marketer' | 'accountant'
}

interface Gender {
  'male' | 'female' | 'other'
}
```