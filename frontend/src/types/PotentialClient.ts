export type PotentialClient = {
  id: string;
  fullName: string;
  phoneNumber: string;
  potencialCarId: string;
  leasing: 'Нужен' | 'Не нужен'
};

export type PotentialClientUpdated = PotentialClient & {
  [key: string]: string;
}

export type PotentialClientForForm = Omit<PotentialClient, 'id'>;
