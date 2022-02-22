import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Menu.module.scss';

const Menu: React.FC = () => {

  type ActiveType = {
    isActive: boolean;
  }

  const activeClass = ({isActive}: ActiveType) => isActive ? classes.active : '';

  return (
    <div className={classes.component}>
      <NavLink className={activeClass} to="/employees">Сотрудники</NavLink>
      <NavLink className={activeClass} to="/clients">Клиенты</NavLink>
      <NavLink className={activeClass} to="/models">Модельный ряд</NavLink>
      <NavLink className={activeClass} to="/test-drive">Запись на тест драйв</NavLink>
      <NavLink className={activeClass} to="/deals-made">Заключенные сделки</NavLink>
      <NavLink className={activeClass} to="/lending">Кредитование и лизинг</NavLink>
      <NavLink className={activeClass} to="/contract-of-sale">Договор купли-продажи</NavLink>
    </div>
  );
};

export default Menu;
