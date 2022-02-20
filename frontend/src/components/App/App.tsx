import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Auth from '../Auth';
import Models from '../Models';
import Layout from '../Layout';
import Employees from '../Employees';

const App: React.FC = () => (
  <Routes>
    <Route path='/auth' element={<Auth />} />
    <Route path='/' element={<Layout />}>
      <Route path='models' element={<Models />} />
      <Route path='employees' element={<Employees />} />
    </Route>
  </Routes>
);

export default App;
