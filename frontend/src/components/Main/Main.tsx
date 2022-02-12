import React from 'react';

import Header from '../Header';
import classes from './Main.module.scss';

const a = 'admin';

const Main: React.FC = () => (
  <div className={classes.component}>
    <Header role={a}/>
    <h1>Main</h1>
  </div>
);

export default Main;
