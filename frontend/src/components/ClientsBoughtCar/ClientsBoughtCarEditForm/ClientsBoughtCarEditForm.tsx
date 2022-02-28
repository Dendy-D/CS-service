import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import { ClientBoughtCar, ClientBoughtCarForForm, Sex } from '../../../types/ClientBoughtCar';
import ClientsBoughtCarStore from '../../../stores/ClientsBoughtCarStore';
import classes from './ClientsBoughtCarEditForm.module.scss';

const ClientsBoughtCarEditForm: React.FC = () => {
  const { id = '' } = useParams();

  const clientBoughtCar: ClientBoughtCar = ClientsBoughtCarStore.getClientBoughtCarById(id);

  const [selected, setSelected] = useState<Sex>(clientBoughtCar.sex);

  const handleOfRadio = (value: Sex) => {
    setSelected(value);
  };

  const navigate = useNavigate();

  const [form, setForm] = useState<ClientBoughtCarForForm>({
    fullName: clientBoughtCar.fullName,
    carId: clientBoughtCar.carId,
    phoneNumber: clientBoughtCar.phoneNumber,
    contractOfSaleId: clientBoughtCar.contractOfSaleId,
    dateOfBirst: clientBoughtCar.dateOfBirst,
    sex: clientBoughtCar.sex,
    placeOfBirth: clientBoughtCar.placeOfBirth,
    seriesAndNumbers: clientBoughtCar.seriesAndNumbers,
  });

  const formChangeHandler = (key: keyof ClientBoughtCarForForm, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const changeEditHandle = () => {
    const formWithCorrectLeasing = {...form, sex: selected };
    ClientsBoughtCarStore.editClientBoughtCar(formWithCorrectLeasing, id);
    navigate('/clients-bought-car');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Редактирование данных клиента, который купил автомобиль</h1>
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
                value="Мужской"
                pointColor="#2B93F4"
                rootColor="#9c9c9c"
                padding={10}
                iconSize={20}
                className={classes.radioButton}
                checked={selected === 'Мужской'}
              >
                Мужской
              </RadioButton>
              <RadioButton
                value="Женский"
                pointColor='#2B93F4'
                rootColor="#9c9c9c"
                padding={10}
                iconSize={20}
                className={classes.radioButton}
                checked={selected === 'Женский'}
              >
                Женский
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

export default ClientsBoughtCarEditForm;
