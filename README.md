# CarsSelling
visual db for staff

## Use-case diagram

![use-case](/assets/use-case_1.0.png)

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
	
/testDrives
	GET /testDrives
	GET /testDrives/:id
	POST /testDrives
	PATCH /testDrives/:id
	DELETE /testDrives/:id

/potentionalClients
	GET /potentionalUsers
	GET /potentionalUsers/:id
	POST /potentionalUsers
	PATCH /potentionalUsers/:id
	DELETE /potentionalUsers/:id

/clients
	GET /clients
	GET /clients/:id
	POST /clients
	PATCH /clients/:id
	DELETE /clients/:id

/request
	GET /clients
	GET /clients/:id
	POST /clients
	PATCH /clients/:id
	DELETE /clients/:id
```

## Models

```ts
interface Car {
  id: string,
  brand: string,
  model: string,
  complectation: string,
  color: string,
  year: number,
  price: number,
  enginePower: number,
  engineVolume: number,
  preview: File,
  booked: boolean,
}

interface Employee {
  id: string,
  fullName: string,
  email: string,
  phoneNumber: string,
  role: Role,
  status: Status,
}

interface TestDrive {
  id: string,
  client: Client,
  carId: string,
  employee: Employee,
  date: Date,
}

interface Client {
  id: string,
  fullName: string,
  phoneNumber: string,
  email: string,
  carId: string,
  gender: 'male' | 'female',
}

interface PotentialClient extends Client {
  leasing: boolean,
}

interface ClientBoughtCar extends Client {
  contractOfSaleId: string,
  passportData: PassportData,
  dateOfBirst: Date,
  placeOfBirth: string,
}

interface ContractOfSale {
  id: string,
  employee: Employee,
  client: ClientBoughtCar,
  car: Car,
}
```