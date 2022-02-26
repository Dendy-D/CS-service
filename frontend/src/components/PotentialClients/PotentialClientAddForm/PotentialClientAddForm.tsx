import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PotentialClientsStore from '../../../stores/PotentialClientsStore';
import classes from './PotentialClientAddForm.module.scss';

type Form = {
  fullName: string;
  phoneNumber: string;
  potencialCarId: string;
  leasing: 'Нужен' | 'Не нужен';
};

const PotentialClientAddForm: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<Form>({
    fullName: '',
    phoneNumber: '',
    potencialCarId: '',
    leasing: 'Не нужен',
  });

  const formChangeHandler = (key: keyof Form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const addPotentialClient = () => {
    PotentialClientsStore.addPotentialClient(form);
    navigate('/potential-clients');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Добавление потенциального клиента</h1>
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
          <label htmlFor="phoneNumber">Номер телефона</label>
          <input
            name="phoneNumber"
            type="text"
            value={form.phoneNumber}
            onChange={(e) => formChangeHandler('phoneNumber', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="potencialCarId">Потенциальный автомобиль</label>
          <input
            name="potencialCarId"
            type="text"
            value={form.potencialCarId}
            onChange={(e) => formChangeHandler('potencialCarId', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="leasing">Лизинг</label>
          <input
            name="leasing"
            type="text"
            value={form.leasing}
            onChange={(e) => formChangeHandler('leasing', e.target.value)}
          />
        </div>
        <div>
          <button className={classes.editButton} onClick={addPotentialClient}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default PotentialClientAddForm;
