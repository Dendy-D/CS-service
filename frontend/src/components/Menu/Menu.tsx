import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Menu.module.scss';

const Menu: React.FC = () => {
  return (
    <div className={classes.component}>
      <Link to="/employees">Сотрудники</Link>
      <Link to="/clients">Клиенты</Link>
      <Link to="/models">Модельный ряд</Link>
      <Link to="/cars-available">Автомобили в наличии</Link>
      <Link to="/test-drive">Запись на тест драйв</Link>
      <Link to="/deals-made">Заключенные сделки</Link>
      <Link to="/lending">Кредитование и лизинг</Link>
      <Link to="/contract-of-sale">Договор купли-продажи</Link>
    </div>
  );
};

export default Menu;
