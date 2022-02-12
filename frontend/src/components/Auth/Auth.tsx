import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import html2canvas from 'html2canvas';

// import employeesDataBase from '../../models/employeesDB';
import { ToastContainer, toastik } from '../toastik';
import classes from './Auth.module.scss';
import axios from 'axios';
import App from '../App';

const Auth: React.FC = () => {
  const options = [
    { value: 'admin', label: 'Администратор', selected: true },
    { value: 'seller', label: 'Продавец' },
    { value: 'marketer', label: 'Маркетолог' },
    { value: 'mechanic', label: 'Механик' },
    { value: 'accountant', label: 'Бухгалтер' },
    { value: 'governance', label: 'Управление' },
    { value: 'systemAdministrator', label: 'Системный Администратор' },
  ];

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState(options[0]);
  const [emptyFields, setEmptyFields] = useState(false);
  const [isShowTost, setShowTost] = useState(false);

  const errors = {
    emptyFieldError: 'Заполните все необходимые поля',
    authError: 'Проверьте правильность ввода данных',
  };

  const changeLogin: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLogin(e.target.value);
  };

  const changePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const changeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const changePosition = (value: any) => {
    console.log(value);
    setPosition(value);
  };

  const authenticationСonfirmation: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    if (!login || !password) {
      setEmptyFields(true);
      toastik();
    } else {
      setEmptyFields(false);
    }
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Авторизация</h1>
        <div className={classes.form}>
          <div>
            <Select
              onChange={changePosition}
              value={position}
              className={classes.select}
              options={options}
              defaultValue={options[1]}
            />
          </div>
          <div>
            <input
              value={login}
              onChange={changeLogin}
              type="text"
              placeholder="Введите ваш логин"
              className={classes.validate}
            />
          </div>
          <div>
            <input
              value={password}
              onChange={changePassword}
              type="password"
              placeholder="Введите ваш пароль"
              className={classes.validate}
            />
          </div>
          <div>
            <input
              value={email}
              onChange={changeEmail}
              type="text"
              placeholder="Введите ваш email (optional)"
              className={classes.validate}
            />
          </div>
          <div>
            <button
              className={classes.button}
              onClick={authenticationСonfirmation}
            >
              Войти в систему
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        message={errors.emptyFieldError}
        type="error"
      />
    </div>
  );
};

export default Auth;
