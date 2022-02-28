export type ClientBoughtCar = {
  id: string;
  fullName: string;
  phoneNumber: string;
  carId: string;
  contractOfSaleId: string;
  dateOfBirst: string;
  sex: Sex;
  placeOfBirth: string;
  seriesAndNumbers: string;
};

export type Sex = 'Мужской' | 'Женский';

export type ClientBoughtCarUpdated = ClientBoughtCar & {
  [key: string]: string;
}

export type ClientBoughtCarForForm = Omit<ClientBoughtCar, 'id'>
