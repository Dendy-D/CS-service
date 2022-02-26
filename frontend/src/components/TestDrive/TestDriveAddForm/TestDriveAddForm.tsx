import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TestDriveEntryesStore from '../../../stores/TestDriveEntryesStore';
import classes from './TestDriveAddForm.module.scss';

type Form = {
  fullNameClient: string;
  fullNameEmployee: string;
  carId: string;
  date: string;
};

const TestDriveAddForm: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<Form>({
    fullNameClient: '',
    fullNameEmployee: '',
    carId: '',
    date: '',
  });

  const formChangeHandler = (key: keyof Form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const addTestDriveEntry = () => {
    TestDriveEntryesStore.addTestDriveEntry(form);
    navigate('/test-drive');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Добавление записи на тест-драйв</h1>
        <div>
          <label htmlFor="fullNameClient">ФИО Клиента</label>
          <input
            name="fullNameClient"
            type="text"
            value={form.fullNameClient}
            onChange={(e) => formChangeHandler('fullNameClient', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fullNameEmployee">ФИО Сотрудника</label>
          <input
            name="fullNameEmployee"
            type="text"
            value={form.fullNameEmployee}
            onChange={(e) => formChangeHandler('fullNameEmployee', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="carId">Автомобиль</label>
          <input
            name="carId"
            type="text"
            value={form.carId}
            onChange={(e) => formChangeHandler('carId', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Дата</label>
          <input
            name="date"
            type="text"
            value={form.date}
            onChange={(e) => formChangeHandler('date', e.target.value)}
          />
        </div>
        <div>
          <button className={classes.editButton} onClick={addTestDriveEntry}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestDriveAddForm;
