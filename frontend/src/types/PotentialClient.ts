export type PotentialClient = {
  id: string;
  fullName: string;
  phoneNumber: string;
  carId: string;
  leasing: Leasing;
};

export type Leasing = 'Не нужен' | 'Нужен'

export type PotentialClientUpdated = PotentialClient & {
  [key: string]: string;
}

export type PotentialClientForForm = Omit<PotentialClient, 'id'>;
