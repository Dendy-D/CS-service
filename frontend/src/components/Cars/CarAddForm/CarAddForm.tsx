import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CarsStore from '../../../stores/CarsStore';
import classes from './CarAddForm.module.scss';

type Form = {
  brand: string,
  model: string,
  complectation: string,
  color: 'black' | 'white' | 'grey',
  year: number,
  price: number,
  enginePower: number,
  engineVolume: number,
  preview: string,
};

const CarAddForm: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<Form>({
    brand: '',
    model: '',
    complectation: '',
    color: 'black',
    year: 0,
    price: 0,
    enginePower: 0,
    engineVolume: 0,
    preview: '',
  });

  const formChangeHandler = (key: keyof Form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const addPotentialClient = () => {
    CarsStore.addCar(form);
    navigate('/models');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Добавление автомобиля</h1>
        <div>
          <label htmlFor="brand">Брэнд</label>
          <input
            name="brand"
            type="text"
            value={form.brand}
            onChange={(e) => formChangeHandler('brand', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="model">Модель</label>
          <input
            name="model"
            type="text"
            value={form.model}
            onChange={(e) => formChangeHandler('model', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="complectation">Комплектация</label>
          <input
            name="complectation"
            type="text"
            value={form.complectation}
            onChange={(e) => formChangeHandler('complectation', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="color">Цвет</label>
          <input
            name="color"
            type="text"
            value={form.color}
            onChange={(e) => formChangeHandler('color', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="year">Год выпуска</label>
          <input
            name="year"
            type="text"
            value={form.year}
            onChange={(e) => formChangeHandler('year', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Цена</label>
          <input
            name="price"
            type="text"
            value={form.price}
            onChange={(e) => formChangeHandler('price', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="enginePower">Мощность двигателя</label>
          <input
            name="enginePower"
            type="text"
            value={form.enginePower}
            onChange={(e) => formChangeHandler('enginePower', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="engineVolume">Объем двигателя</label>
          <input
            name="engineVolume"
            type="text"
            value={form.engineVolume}
            onChange={(e) => formChangeHandler('engineVolume', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="preview">Ссылка на превью</label>
          <input
            name="preview"
            type="text"
            value={form.preview}
            onChange={(e) => formChangeHandler('preview', e.target.value)}
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

export default CarAddForm;
