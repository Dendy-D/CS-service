import React from 'react';

import Main from '../routes/Main';
import Header from '../ui/Header';
import Menu from '../Menu';
import AppRouter from '../AppRouter';
import classes from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={classes.component}>
      <div className={classes.sideBar}>
        <Menu />
      </div>
      <div className={classes.content}>
        <Header />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
