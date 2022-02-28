import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import { PotentialClient, PotentialClientForForm, Leasing } from '../../../types/PotentialClient';
import PotentialClientsStore from '../../../stores/PotentialClientsStore';
import classes from './PotentialClientEditForm.module.scss';

const PotentialClientEditForm: React.FC = () => {
  const { id = '' } = useParams();

  const potentialClient: PotentialClient = PotentialClientsStore.getPotentialClientById(id);

  const [selected, setSelected] = useState<Leasing>(potentialClient.leasing);

  const handleOfRadio = (value: Leasing) => {
    setSelected(value);
  };

  const navigate = useNavigate();

  const [form, setForm] = useState<PotentialClientForForm>({
    fullName: potentialClient.fullName,
    phoneNumber: potentialClient.phoneNumber,
    carId: potentialClient.carId,
    leasing: potentialClient.leasing,
  });

  const formChangeHandler = (key: keyof PotentialClientForForm, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const changeEditHandle = () => {
    const formWithCorrectLeasing = {...form, leasing: selected };
    PotentialClientsStore.editPotentialClient(formWithCorrectLeasing, id);
    navigate('/potential-clients');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Редактирование данных потенциального клиента</h1>
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
          <label htmlFor="carId">Потенциальный автомобиль
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
                checked={selected === 'Нужен'}
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
                checked={selected === 'Не нужен'}
              >
                Не нужен
              </RadioButton>
            </RadioGroup>
          </div>
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

export default PotentialClientEditForm;
