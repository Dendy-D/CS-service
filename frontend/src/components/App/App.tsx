import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Auth from '../Auth';
import Main from '../Main';
import classes from './App.module.scss';

const App: React.FC = () => {
  const a = 1;
  return (
    <Routes>
      <Route path='/' element={<Auth />}>
        <Route path='/auth' element={<Auth />} />
      </Route>
      <Route path='/main' element={<Main />} />
    </Routes>
  );
};

export default App;
