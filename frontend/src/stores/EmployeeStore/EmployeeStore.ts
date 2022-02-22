import { makeAutoObservable, toJS } from 'mobx';

import employeesDataBase from '../../models/employeesDB';
import { getDataFromFakeDB } from '../../utils/parserFakeDB';
import { Employee, EmployeeForEdit, EmployeeUpdated } from '../../types/Employee';

class EmployeeStore {
  employees: Array<Employee> = getDataFromFakeDB(employeesDataBase);

  constructor() {
    makeAutoObservable(this);
  }

  dismissalEmployee(id: string) {
    this.employees.map((employee: Employee) => {
      if (employee.id === id) {
        employee.status = 'fired';
      }
    });
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
    const editableEmployee: EmployeeUpdated = this.getEmployeeById(id);

    const indexInitialEmployee: Array<number> = [];

    this.employees.map((employee: Employee, index: number) => {
      if (employee.id === editableEmployee.id) {
        indexInitialEmployee.push(index);
        return;
      }
    });

    Object.entries(employeeEdited).forEach(([key, value]: Array<string>) => {
      editableEmployee[key] = value;
    });

    this.employees[indexInitialEmployee[0]] = editableEmployee;
  }

}

export default new EmployeeStore();
