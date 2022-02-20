import { makeAutoObservable } from 'mobx';

import employeesDataBase from '../../models/employeesDB';
import { getDataFromFakeDB } from '../../utils/parserFakeDB';
import { Employee } from '../../types/Employee';

class EmployeeStore {
  employees = getDataFromFakeDB(employeesDataBase);

  constructor() {
    makeAutoObservable(this);
  }

  removeEmployee(id: string) {
    this.employees = this.employees.filter((employee: Employee) => employee.id !== id);
    console.log(id);
    console.log(this.employees);
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

}

export default new EmployeeStore();
