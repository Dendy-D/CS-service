export type Car = {
  id: string;
  brand: string;
  model: string;
  complectation: string;
  color: 'black' | 'white' | 'grey';
  year: number;
  price: number;
  enginePower: number;
  engineVolume: number;
  preview: string;
}

export type CarUpdated = Car & {
  [key: string]: string | number;
}

export type CarForForm = Omit<Car, 'id'>;
