export type Employee = {
  id: string;
  login: string;
  password: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  position: string;
  status: 'fired' | 'working';
};

export type EmployeeUpdated = Employee & {
  [key: string]: string | number;
};

export type EmployeeForEdit = Omit<Employee, 'id' | 'login' | 'password' | 'status'>;