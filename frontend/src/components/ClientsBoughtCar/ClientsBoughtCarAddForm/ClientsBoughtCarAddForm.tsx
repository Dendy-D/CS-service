import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import { ClientBoughtCarForForm, Sex } from '../../../types/ClientBoughtCar';
import ClientsBoughtCarStore from '../../../stores/ClientsBoughtCarStore';
import classes from './ClientsBoughtCarAddForm.module.scss';

const ClientsBoughtCarAddForm: React.FC = () => {
  const [selected, setSelected] = useState<Sex>('Мужской');

  const handleOfRadio = (value: Sex) => {
    setSelected(value);
  };

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
    const formWithCorrectLeasing = {...form, sex: selected };
    ClientsBoughtCarStore.addClientBoughtCar(formWithCorrectLeasing);
    navigate('/clients-bought-car');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Добавление клиента, который купил автомобиль</h1>
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
          <label htmlFor="carId">carId
            <input
              name="carId"
              type="text"
              value={form.carId}
              onChange={(e) => formChangeHandler('carId', e.target.value)}
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
          <label htmlFor="contractOfSaleId">Номер договора
            <input
              name="contractOfSaleId"
              type="text"
              value={form.contractOfSaleId}
              onChange={(e) => formChangeHandler('contractOfSaleId', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="dateOfBirst">Дата рождения
            <input
              name="dateOfBirst"
              type="text"
              value={form.dateOfBirst}
              onChange={(e) => formChangeHandler('dateOfBirst', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="placeOfBirth">Место Рождения
            <input
              name="placeOfBirth"
              type="text"
              value={form.placeOfBirth}
              onChange={(e) => formChangeHandler('placeOfBirth', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="seriesAndNumbers">Серия и номер
            <input
              name="seriesAndNumbers"
              type="text"
              value={form.seriesAndNumbers}
              onChange={(e) => formChangeHandler('seriesAndNumbers', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>Пол</label>
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
                Мужской
              </RadioButton>
              <RadioButton
                value="Не нужен"
                pointColor='#2B93F4'
                rootColor="#9c9c9c"
                padding={10}
                iconSize={20}
                className={classes.radioButton}
              >
                Женский
              </RadioButton>
            </RadioGroup>
          </div>
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
