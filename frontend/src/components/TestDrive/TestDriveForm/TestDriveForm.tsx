import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { TestDriveEntry } from '../../../types/TestDriveEntry';
import TestDriveEntryesStore from '../../../stores/TestDriveEntryesStore';
import classes from './TestDriveForm.module.scss';

type Form = {
  fullNameClient: string;
  fullNameEmployee: string;
  carId: string;
  date: string;
};

const TestDriveForm: React.FC = () => {
  const { id = '' } = useParams();

  const navigate = useNavigate();

  const testDriveEntry: TestDriveEntry = TestDriveEntryesStore.getTestDriveEntryById(id);

  const [form, setForm] = useState<Form>({
    fullNameClient: testDriveEntry.fullNameClient,
    carId: testDriveEntry.carId,
    fullNameEmployee: testDriveEntry.fullNameEmployee,
    date: testDriveEntry.date,
  });

  const formChangeHandler = (key: keyof Form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const changeEditHandle = () => {
    TestDriveEntryesStore.editTestDriveEntry(form, id);
    navigate('/test-drive');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Редактирование данных потенциального клиента</h1>
        <div>
          <label htmlFor="fullNameClient">ФИО клиента</label>
          <input
            name="fullNameClient"
            type="text"
            value={form.fullNameClient}
            onChange={(e) => formChangeHandler('fullNameClient', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="carId">carId</label>
          <input
            name="carId"
            type="text"
            value={form.carId}
            onChange={(e) => formChangeHandler('carId', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fullNameEmployee">ФИО сотрудника</label>
          <input
            name="fullNameEmployee"
            type="text"
            value={form.fullNameEmployee}
            onChange={(e) => formChangeHandler('fullNameEmployee', e.target.value)}
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
          <button className={classes.editButton} onClick={changeEditHandle}>
            Редактировать
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestDriveForm;
