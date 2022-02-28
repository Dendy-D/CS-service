export type Car = {
  id: string;
  brand: string;
  model: string;
  complectation: string;
  color: Color;
  year: number;
  price: number;
  enginePower: number;
  engineVolume: number;
  preview: string;
  booked: boolean;
}

export type Color = 'Черный' | 'Белый' | 'Серый';

export type CarUpdated = Car & {
  [key: string]: string | number | boolean;
}

export type CarForForm = Omit<Car, 'id'>;
