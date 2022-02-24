import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { PotentialClient } from '../../../types/PotentialClient';
import PotentialClientsStore from '../../../stores/PotentialClientsStore';
import classes from './PotentialClientForm.module.scss';

type Form = {
  fullName: string;
  phoneNumber: string;
  potencialCarId: string;
  leasing: 'Нужен' | 'Не нужен';
};

const PotentialClientForm: React.FC = () => {
  const { id = '' } = useParams();

  const navigate = useNavigate();

  const potentialClient: PotentialClient = PotentialClientsStore.getPotentialClientById(id);

  const [form, setForm] = useState<Form>({
    fullName: potentialClient.fullName,
    phoneNumber: potentialClient.phoneNumber,
    potencialCarId: potentialClient.potencialCarId,
    leasing: potentialClient.leasing,
  });

  const formChangeHandler = (key: keyof Form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const changeEditHandle = () => {
    PotentialClientsStore.editPotentialClient(form, id);
    navigate('/potential-clients');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Редактирование данных потенциального клиента</h1>
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
          <label htmlFor="potencialCarId">Номер</label>
          <input
            name="potencialCarId"
            type="text"
            value={form.potencialCarId}
            onChange={(e) => formChangeHandler('potencialCarId', e.target.value)}
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
          <label htmlFor="leasing">Лизинг</label>
          <input
            name="leasing"
            type="text"
            value={form.leasing}
            onChange={(e) => formChangeHandler('leasing', e.target.value)}
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

export default PotentialClientForm;
