import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ClientBoughtCar } from '../../../types/ClientBoughtCar';
import ClientsBoughtCarStore from '../../../stores/ClientsBoughtCarStore';
import classes from './ClientsBoughtCarForm.module.scss';

type Form = {
  fullName: string;
  phoneNumber: string;
  carId: string;
  contractOfSaleId: string;
  dateOfBirst: string;
  sex: 'Мужской' | 'Женский';
  placeOfBirth: string;
  seriesAndNumbers: string;
};

const ClientsBoughtCarForm: React.FC = () => {
  const { id = '' } = useParams();

  const navigate = useNavigate();

  const clientBoughtCar: ClientBoughtCar = ClientsBoughtCarStore.getClientBoughtCarById(id);

  const [form, setForm] = useState<Form>({
    fullName: clientBoughtCar.fullName,
    carId: clientBoughtCar.carId,
    phoneNumber: clientBoughtCar.phoneNumber,
    contractOfSaleId: clientBoughtCar.contractOfSaleId,
    dateOfBirst: clientBoughtCar.dateOfBirst,
    sex: clientBoughtCar.sex,
    placeOfBirth: clientBoughtCar.placeOfBirth,
    seriesAndNumbers: clientBoughtCar.seriesAndNumbers,
  });

  const formChangeHandler = (key: keyof Form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const changeEditHandle = () => {
    ClientsBoughtCarStore.editClientBoughtCar(form, id);
    navigate('/clients-bought-car');
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
          <button className={classes.editButton} onClick={changeEditHandle}>
            Редактировать
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientsBoughtCarForm;
