import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ContractsOfSaleStore from '../../stores/ContractsOfSaleStore';
import { ContractOfSaleT } from '../../types/ContractOfSale';
import { uniqueId } from '../../utils/generatorId';
import classes from './ContractOfSale.module.scss';

const ContractOfSale: React.FC = () => {

  const generateId = uniqueId();

  const navigate = useNavigate();

  const [form, setForm] = useState<ContractOfSaleT>({
    id: generateId,
    fullNameEmployee: '',
    potentialClient: {
      fullName: '',
      leasing: 'Не нужен',
      phoneNumber: '',
      carId: '',
    },
    car: {
      id: '',
      brand: '',
      model: '',
      complectation: '',
      color: 'Белый',
      year: 0,
      price: 0,
      enginePower: 0,
      engineVolume: 0,
      preview: '',
      booked: true,
    },
    date: '',
  });

  const addPotentialClient = () => {
    ContractsOfSaleStore.addContractOfSale(form);
    navigate('/deals-made');
  };

  const formChangeHandler = (key: keyof ContractOfSaleT, value: string) => {
    setForm({ ...form, [key]: value });
  };
  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Добавление нового договора</h1>
        <div>
          <label htmlFor="fullName">
            Номер договора
            <input
              name="fullName"
              type="text"
              disabled
              value={form.id}
            />
          </label>
        </div>
        <div>
          <label htmlFor="fullNameEmployee">
            Имя продавца
            <input
              name="fullNameEmployee"
              type="text"
              value={form.fullNameEmployee}
              onChange={(e) => formChangeHandler('fullNameEmployee', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="fullNamePotentialClient">
            ФИО клиента
            <input
              name="fullNamePotentialClient"
              type="text"
              value={form.potentialClient.fullName}
              onChange={(e) => formChangeHandler('potentialClient', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="phoneNumber">
            Номер телефона
            <input
              name="phoneNumber"
              type="text"
              value={form.potentialClient.phoneNumber}
              onChange={(e) => formChangeHandler('potentialClient', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="brand">
            Марка
            <input
              name="brand"
              type="text"
              value={form.car.brand}
              onChange={(e) => formChangeHandler('car', e.target.value)}
            />
          </label>
          <label htmlFor="model">
            Модель
            <input
              name="model"
              type="text"
              value={form.car.model}
              onChange={(e) => formChangeHandler('car', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="year">
            Год выпуска
            <input
              name="year"
              type="text"
              value={form.car.year}
              onChange={(e) => formChangeHandler('car', e.target.value)}
            />
          </label>
          <label htmlFor="color">
            Цвет
            <input
              name="color"
              type="text"
              value={form.car.color}
              onChange={(e) => formChangeHandler('car', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="complectation">
            Комплектация
            <input
              name="complectation"
              type="text"
              value={form.car.complectation}
              onChange={(e) => formChangeHandler('car', e.target.value)}
            />
          </label>
          <label htmlFor="price">
            Цена
            <input
              name="price"
              type="text"
              value={form.car.price}
              onChange={(e) => formChangeHandler('car', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="enginePower">
            Мощность выпуска
            <input
              name="enginePower"
              type="text"
              value={form.car.enginePower}
              onChange={(e) => formChangeHandler('car', e.target.value)}
            />
          </label>
          <label htmlFor="engineVolume">
            Объем двигателя
            <input
              name="engineVolume"
              type="text"
              value={form.car.engineVolume}
              onChange={(e) => formChangeHandler('car', e.target.value)}
            />
          </label>
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

export default ContractOfSale;
