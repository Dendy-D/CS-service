import { makeAutoObservable, toJS } from 'mobx';

import cotractsOfSaleDB from '../../fakeDatabases/cotractsOfSaleDB';
import { uniqueId } from '../../utils/generatorId';
import { ContractOfSaleT, ContractOfSaleForForm } from './../../types/ContractOfSale';
import { useNavigate } from 'react-router-dom';

class ContractsOfSale {

  cotractsOfSaleDB: Array<ContractOfSaleT> = cotractsOfSaleDB;

  constructor() {
    makeAutoObservable(this);
  }

  addContractOfSale(contract: ContractOfSaleT) {
    const newContarctOfSale: ContractOfSaleT = {
      fullNameEmployee: contract.fullNameEmployee,
      potentialClient: contract.potentialClient,
      car: contract.car,
      date: contract.date,
      id: contract.id,
    };
    this.cotractsOfSaleDB.push(newContarctOfSale);
  }
}

export default new ContractsOfSale();
