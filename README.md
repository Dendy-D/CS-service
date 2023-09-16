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
	PATCH /employees/:id
	DELETE /employees/:id

/cars
	GET /cars
	GET /cars/:id
	POST /cars
	PATCH /cars/:id
	DELETE /cars/:id
	
/test-drives
	GET /test-drives
	GET /test-drives/:id
	POST /test-drives
	PATCH /test-drives/:id
	DELETE /test-drives/:id

/potential-clients
	GET /potential-clients
	GET /potential-clients/:id
	POST /potential-clients
	PATCH /potential-clients/:id
	DELETE /potential-clients/:id

/clients
	GET /clients
	GET /clients/:id
	POST /clients
	PATCH /clients/:id
	DELETE /clients/:id

/requests
	GET /requests
	GET /requests/:id
	POST /requests
	PATCH /requests/:id
	DELETE /requests/:id

/contracts
  GET /contracts
	GET /contracts/:id
	POST /contracts
	DELETE /contracts/:id
```

## Models

```ts
interface Car {
  id: string,
  brand: string,
  model: string,
  acceleration: number,
  topSpeed: number,
  color: string,
  yearOfManufacture: number,
  price: number,
  enginePower: number,
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
  salary: string,
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

interface ContractOfSale {
  id: string,
  passportCode: string,
  dateOfBirth: Date,
  city: string,
  country: string,
  zipCode: number,
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