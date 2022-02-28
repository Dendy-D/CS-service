import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { EmployeeForForm } from '../../../types/Employee';
import EmployeesStore from '../../../stores/EmployeesStore';
import classes from './EmployeeAddForm.module.scss';

const EmployeeAddForm: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<EmployeeForForm>({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
  });

  const formChangeHandler = (key: keyof EmployeeForForm, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const addEmployee = () => {
    EmployeesStore.addEmployee(form);
    navigate('/employees');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Добавление сотрудника</h1>
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
          <button className={classes.editButton} onClick={addEmployee}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAddForm;
