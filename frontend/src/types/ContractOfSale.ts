import { Car } from './Car';
import { PotentialClient, PotentialClientForForm } from './PotentialClient';

export type ContractOfSaleT = {
  id: string;
  fullNameEmployee: string;
  potentialClient: PotentialClientForForm;
  car: Car;
  date: string;
};

export type ContractOfSaleForTable = {
  contractId: string;
  fullNameEmployee: string;
  potentialClient: string;
  car: string;
  date: string;
}

export type ContractOfSaleForForm = Omit<ContractOfSaleT, 'id'>
