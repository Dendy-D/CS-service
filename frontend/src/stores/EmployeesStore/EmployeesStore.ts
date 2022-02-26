import { makeAutoObservable, toJS } from 'mobx';

import employeesDataBase from '../../models/employeesDB';
import { getDataFromFakeDB } from '../../utils/parserFakeDB';
import { generatorLogin } from '../../utils/generatorLogin';
import { uniqueId } from '../../utils/generatorId';
import { Employee, EmployeeForForm, EmployeeUpdated } from '../../types/Employee';

class EmployeesStore {
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

  addEmployee(employee: EmployeeForForm) {
    const newEmployee: Employee = {
      fullName: employee.fullName,
      email: employee.email,
      phoneNumber: employee.phoneNumber,
      position: employee.position,
      login: generatorLogin(employee.fullName),
      password: 123321,
      status: 'working',
      id: uniqueId(),
    };
    this.employees.push(newEmployee);
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

  editEmployee(employeeEdited: EmployeeForForm, id: string) {
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

export default new EmployeesStore();
