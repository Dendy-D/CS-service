import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Clients.module.scss';

const Clients: React.FC = () => (
  <div className={classes.component}>
    <Link to="/potential-clients">Потенциальные клиенты</Link>
    <Link to="/clients-bought-car">Клиенты купившие автомобиль</Link>
  </div>
);

export default Clients;
