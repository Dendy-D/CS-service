import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import {
  PotentialClientForForm,
  Leasing,
} from '../../../types/PotentialClient';
import PotentialClientsStore from '../../../stores/PotentialClientsStore';
import classes from './PotentialClientAddForm.module.scss';

const PotentialClientAddForm: React.FC = () => {
  const [selected, setSelected] = useState<Leasing>('Не нужен');

  const handleOfRadio = (value: Leasing) => {
    setSelected(value);
  };

  const navigate = useNavigate();

  const [form, setForm] = useState<PotentialClientForForm>({
    fullName: '',
    phoneNumber: '',
    carId: '',
    leasing: 'Не нужен',
  });

  const formChangeHandler = (key: keyof PotentialClientForForm, value: string | Leasing) => {
    setForm({ ...form, [key]: value });
  };

  const addPotentialClient = () => {
    const formWithCorrectLeasing = {...form, leasing: selected };
    PotentialClientsStore.addPotentialClient(formWithCorrectLeasing);
    navigate('/potential-clients');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Добавление потенциального клиента</h1>
        <div>
          <label htmlFor="fullName">
            ФИО
            <input
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={(e) => formChangeHandler('fullName', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="phoneNumber">
            Номер телефона
            <input
              name="phoneNumber"
              type="text"
              value={form.phoneNumber}
              onChange={(e) => formChangeHandler('phoneNumber', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="carId">
            Потенциальный автомобиль
            <input
              name="carId"
              type="text"
              value={form.carId}
              onChange={(e) => formChangeHandler('carId', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>Нужен ли лизинг</label>
          <div className={classes.radioContainer}>
            <RadioGroup onChange={handleOfRadio} horizontal>
              <RadioButton
                value="Нужен"
                pointColor="#2B93F4"
                rootColor="#9c9c9c"
                padding={10}
                iconSize={20}
                className={classes.radioButton}
              >
                Нужен
              </RadioButton>
              <RadioButton
                value="Не нужен"
                pointColor='#2B93F4'
                rootColor="#9c9c9c"
                padding={10}
                iconSize={20}
                className={classes.radioButton}
              >
                Не нужен
              </RadioButton>
            </RadioGroup>
          </div>
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
