import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Auth from '../Auth';
import CarsAvailable from '../CarsAvailable';
import Layout from '../Layout';
// import classes from './App.module.scss';

const App: React.FC = () => (
  <Routes>
    <Route path='/auth' element={<Auth />} />
    <Route path='/' element={<Layout />}>
      <Route path='cars-available' element={<CarsAvailable />} />
    </Route>
  </Routes>
);

export default App;
