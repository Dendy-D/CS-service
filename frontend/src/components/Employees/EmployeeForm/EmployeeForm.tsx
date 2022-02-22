import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Employee } from '../../../types/Employee';
import EmployeeStore from '../../../stores/EmployeeStore';
import classes from './EmployeeForm.module.scss';

type Form = {
  fullName: string;
  email: string;
  phoneNumber: string;
  position: string;
};

const EmployeeForm: React.FC = () => {
  const { id = '' } = useParams();

  const navigate = useNavigate();

  const employee: Employee = EmployeeStore.getEmployeeById(id);

  const [form, setForm] = useState<Form>({
    fullName: employee.fullName,
    email: employee.email,
    phoneNumber: employee.phoneNumber,
    position: employee.position,
  });

  const formChangeHandler = (key: keyof Form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const changeEditHandle = () => {
    EmployeeStore.editEmployee(form, id);
    navigate('/employees');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Редактирование данных сотрудника</h1>
        <div>
          <label htmlFor="fullName">ФИО</label>
          <input
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={(e) => formChangeHandler('fullName', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            name="email"
            type="text"
            value={form.email}
            onChange={(e) => formChangeHandler('email', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Номер телефона</label>
          <input
            name="phoneNumber"
            type="text"
            value={form.phoneNumber}
            onChange={(e) => formChangeHandler('phoneNumber', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="position">Должность</label>
          <input
            name="position"
            type="text"
            value={form.position}
            onChange={(e) => formChangeHandler('position', e.target.value)}
          />
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

export default EmployeeForm;
