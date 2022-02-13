import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Menu from '../Menu';
import classes from './Layout.module.scss';

const a = 'admin';

const Layout: React.FC = () => (
  <div className={classes.component}>
    <Header role={a}/>
    <div className={classes.content}>
      <Menu />
      <Outlet />
    </div>
  </div>
);

export default Layout;
