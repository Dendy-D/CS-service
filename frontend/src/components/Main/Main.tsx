import React from 'react';

import Header from '../Header';
import Menu from '../Menu';
import classes from './Main.module.scss';

const a = 'admin';

const Main: React.FC = () => (
  <div className={classes.component}>
    <Header role={a}/>
    <Menu />
  </div>
);

export default Main;
