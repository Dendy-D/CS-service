import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Auth from '../Auth';
import Layout from '../Layout';
// import classes from './App.module.scss';

const App: React.FC = () => (
  <Routes>
    <Route path='/auth' element={<Auth />} />
    <Route path='/' element={<Layout />}>

    </Route>
  </Routes>
);

export default App;
