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

  POST /employees/:id/status/fired
  POST /employees/:id/status/vacation
  POST /employees/:id/status/active

  DELETE /employees/:id (exclusively for backend)

/cars
  GET /cars
  GET /cars/:id
  POST /cars
  PUT /cars/:id

  POST /cars/:id/status/sold
  POST /cars/:id/status/faulty
  POST /cars/:id/status/booked
  POST /cars/:id/status/active
  
  DELETE /cars/:id (exclusively for backend)
	
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

  DELETE /contracts/:id (exclusively for backend)

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
  status: CarStatus,
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
  employeeRole: Role,
  status: EmployeeStatus,
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

interface EmployeeStatus {
  'active' | 'fired' | 'vacation'
}

interface CarStatus {
  'active' | 'booked' | 'sold' | 'faulty'
}

```