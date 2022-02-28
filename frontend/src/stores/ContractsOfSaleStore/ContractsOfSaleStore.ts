import { makeAutoObservable, toJS } from 'mobx';

import contractsOfSaleDB from '../../fakeDatabases/cotractsOfSaleDB';
import { uniqueId } from '../../utils/generatorId';
import { ContractOfSaleT, ContractOfSaleForForm, ContractOfSaleForTable } from '../../types/ContractOfSale';

const parserFromObj = (arr: ContractOfSaleT[]): Array<ContractOfSaleForTable> => {
  const result: any = [];

  arr.forEach((contract) => {
    const obj: any = {};
    obj.fullNameEmployee = contract.fullNameEmployee;
    obj.potentialClient = contract.potentialClient.fullName;
    obj.car = contract.car.id;
    obj.date = contract.date;
    obj.contractId = contract.id;
    result.push(obj);
  });

  return result;
};

class ContractsOfSale {

  contractsOfSaleDB: Array<ContractOfSaleT> = contractsOfSaleDB;

  contractsOfSaleForTable: Array<ContractOfSaleForTable> = parserFromObj(this.contractsOfSaleDB);

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
    this.contractsOfSaleDB.push(newContarctOfSale);

    const newContarctOfSaleForTable: ContractOfSaleForTable = {
      fullNameEmployee: contract.fullNameEmployee,
      potentialClient: contract.potentialClient.fullName,
      car: contract.car.id,
      date: contract.date,
      contractId: contract.id,
    };
    this.contractsOfSaleForTable.push(newContarctOfSaleForTable);
  }

  deleteContractOfSale(id: string) {
    this.contractsOfSaleDB = this.contractsOfSaleDB.filter((contract: ContractOfSaleT) => contract.id !== id);
  }
}

export default new ContractsOfSale();
