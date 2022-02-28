import { Car } from './Car';
import { PotentialClient } from './PotentialClient';

export type ContractOfSale = {
  id: string;
  fullNameEmployee: string;
  potentialClient: PotentialClient;
  car: Car;
  date: string;
};

export type ContractOfSaleForForm = Omit<ContractOfSale, 'id'>
