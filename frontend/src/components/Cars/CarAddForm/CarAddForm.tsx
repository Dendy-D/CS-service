import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import { CarForForm, Color } from '../../../types/Car';
import CarsStore from '../../../stores/CarsStore';
import classes from './CarAddForm.module.scss';

const CarAddForm: React.FC = () => {
  const [selected, setSelected] = useState<Color>('Черный');

  const handleOfRadio = (value: Color) => {
    setSelected(value);
  };

  const navigate = useNavigate();

  const [form, setForm] = useState<CarForForm>({
    brand: '',
    model: '',
    complectation: '',
    color: 'Черный',
    year: 0,
    price: 0,
    enginePower: 0,
    engineVolume: 0,
    preview: '',
    booked: false,
  });

  const formChangeHandler = (key: keyof CarForForm, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const addPotentialClient = () => {
    const formWithCorrectLeasing = {...form, color: selected };
    CarsStore.addCar(formWithCorrectLeasing);
    navigate('/models');
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Добавление автомобиля</h1>
        <div>
          <label htmlFor="brand">Брэнд
            <input
              name="brand"
              type="text"
              value={form.brand}
              onChange={(e) => formChangeHandler('brand', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="model">Модель
            <input
              name="model"
              type="text"
              value={form.model}
              onChange={(e) => formChangeHandler('model', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="complectation">Комплектация
            <input
              name="complectation"
              type="text"
              value={form.complectation}
              onChange={(e) => formChangeHandler('complectation', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="year">Год выпуска
            <input
              name="year"
              type="text"
              value={form.year}
              onChange={(e) => formChangeHandler('year', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="price">Цена
            <input
              name="price"
              type="text"
              value={form.price}
              onChange={(e) => formChangeHandler('price', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="enginePower">Мощность двигателя
            <input
              name="enginePower"
              type="text"
              value={form.enginePower}
              onChange={(e) => formChangeHandler('enginePower', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="engineVolume">Объем двигателя
            <input
              name="engineVolume"
              type="text"
              value={form.engineVolume}
              onChange={(e) => formChangeHandler('engineVolume', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="preview">Ссылка на превью
            <input
              name="preview"
              type="text"
              value={form.preview}
              onChange={(e) => formChangeHandler('preview', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>Цвет</label>
          <div className={classes.radioContainer}>
            <RadioGroup onChange={handleOfRadio} horizontal>
              <RadioButton
                value="Черный"
                pointColor="#2B93F4"
                rootColor="#9c9c9c"
                padding={10}
                iconSize={20}
                className={classes.radioButton}
              >
                Черный
              </RadioButton>
              <RadioButton
                value="Белый"
                pointColor='#2B93F4'
                rootColor="#9c9c9c"
                padding={10}
                iconSize={20}
                className={classes.radioButton}
              >
                Белый
              </RadioButton>
              <RadioButton
                value="Серый"
                pointColor="#2B93F4"
                rootColor="#9c9c9c"
                padding={10}
                iconSize={20}
                className={classes.radioButton}
              >
                Серый
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

export default CarAddForm;
