import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ClientBoughtCarForForm } from '../../../types/ClientBoughtCar';
import ClientsBoughtCarStore from '../../../stores/ClientsBoughtCarStore';
import classes from './ClientsBoughtCarAddForm.module.scss';

const ClientsBoughtCarAddForm: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<ClientBoughtCarForForm>({
    fullName: '',
    carId: '',
    phoneNumber: '',
    contractOfSaleId: '',
    dateOfBirst: '',
    sex: 'Мужской',
    placeOfBirth: '',
    seriesAndNumbers: '',
  });

  const formChangeHandler = (key: keyof ClientBoughtCarForForm, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const addClientBoughtCar = () => {
    ClientsBoughtCarStore.addClientBoughtCar(form);
    navigate('/clients-bought-car');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Добавление клиента, который купил автомобиль</h1>
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
          <label htmlFor="sex">ПОЛ</label>
          <input
            name="sex"
            type="text"
            value={form.sex}
            onChange={(e) => formChangeHandler('sex', e.target.value)}
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
          <label htmlFor="phoneNumber">Номер телефона</label>
          <input
            name="phoneNumber"
            type="text"
            value={form.phoneNumber}
            onChange={(e) => formChangeHandler('phoneNumber', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contractOfSaleId">Номер договора</label>
          <input
            name="contractOfSaleId"
            type="text"
            value={form.contractOfSaleId}
            onChange={(e) => formChangeHandler('contractOfSaleId', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateOfBirst">Дата рождения</label>
          <input
            name="dateOfBirst"
            type="text"
            value={form.dateOfBirst}
            onChange={(e) => formChangeHandler('dateOfBirst', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="placeOfBirth">Место Рождения</label>
          <input
            name="placeOfBirth"
            type="text"
            value={form.placeOfBirth}
            onChange={(e) => formChangeHandler('placeOfBirth', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="seriesAndNumbers">Серия и номер</label>
          <input
            name="seriesAndNumbers"
            type="text"
            value={form.seriesAndNumbers}
            onChange={(e) => formChangeHandler('seriesAndNumbers', e.target.value)}
          />
        </div>
        <div>
          <button className={classes.editButton} onClick={addClientBoughtCar}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientsBoughtCarAddForm;
