import { makeAutoObservable, toJS } from 'mobx';

import employeesDataBase from '../../models/employeesDB';
import { getDataFromFakeDB } from '../../utils/parserFakeDB';
import { Employee, EmployeeForEdit, EmployeeUpdated } from '../../types/Employee';

class EmployeeStore {
  employees = getDataFromFakeDB(employeesDataBase);

  constructor() {
    makeAutoObservable(this);
  }

  removeEmployee(id: string) {
    this.employees = this.employees.filter((employee: Employee) => employee.id !== id);
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getEmployeeById(id: string) {
    let result: any;

    this.employees.forEach((employee: Employee) => {
      if (employee.id === id) {
        result = employee;
      }
    });

    return toJS(result);
  }

  editEmployee(employeeEdited: EmployeeForEdit, id: string) {
    const employee: EmployeeUpdated = this.getEmployeeById(id);

    const indexInitialEmployee: Array<number> = [];

    this.employees.map((el, id) => {
      if (el.id === employee.id) {
        indexInitialEmployee.push(id);
        return;
      }
    });

    Object.entries(employeeEdited).forEach(([key, value]: Array<string>) => {
      employee[key] = value;
    });

    this.employees[indexInitialEmployee[0]] = employee;
  }

}

export default new EmployeeStore();
