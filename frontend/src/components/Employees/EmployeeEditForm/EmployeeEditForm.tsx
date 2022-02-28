import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Employee, EmployeeForForm } from '../../../types/Employee';
import EmployeesStore from '../../../stores/EmployeesStore';
import classes from './EmployeeEditForm.module.scss';

const EmployeeEditForm: React.FC = () => {
  const { id = '' } = useParams();

  const navigate = useNavigate();

  const employee: Employee = EmployeesStore.getEmployeeById(id);

  const [form, setForm] = useState<EmployeeForForm>({
    fullName: employee.fullName,
    email: employee.email,
    phoneNumber: employee.phoneNumber,
    position: employee.position,
  });

  const formChangeHandler = (key: keyof EmployeeForForm, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const changeEditHandle = () => {
    EmployeesStore.editEmployee(form, id);
    navigate('/employees');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Редактирование данных сотрудника</h1>
        <div>
          <label htmlFor="fullName">ФИО
            <input
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={(e) => formChangeHandler('fullName', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">email
            <input
              name="email"
              type="text"
              value={form.email}
              onChange={(e) => formChangeHandler('email', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="phoneNumber">Номер телефона
            <input
              name="phoneNumber"
              type="text"
              value={form.phoneNumber}
              onChange={(e) => formChangeHandler('phoneNumber', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="position">Должность
            <input
              name="position"
              type="text"
              value={form.position}
              onChange={(e) => formChangeHandler('position', e.target.value)}
            />
          </label>
        </div>
        <div>
          <button className={classes.editButton} onClick={changeEditHandle}>
            Редактировать
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEditForm;
