export type Employee = {
  id: string;
  login: string;
  password: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  position: string;
  status: 'fired' | 'working';
};

export type EmployeeUpdated = Employee & {
  [key: string]: string | number;
};

export type EmployeeForForm = Omit<Employee, 'id' | 'login' | 'password' | 'status'>;
