export type ClientBoughtCar = {
  id: string;
  fullName: string;
  phoneNumber: string;
  carId: string;
  contractOfSaleId: string;
  dateOfBirst: string;
  sex: 'Мужской' | 'Женский';
  placeOfBirth: string;
  seriesAndNumbers: string;
};

export type ClientBoughtCarUpdated = ClientBoughtCar & {
  [key: string]: string;
}

export type ClientBoughtCarForForm = Omit<ClientBoughtCar, 'id'>
