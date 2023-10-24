import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path='/' element={'Main'} />
    <Route path='/cars' element={'Cars'} />
    <Route path='/potential-clients' element={'Potential clients'} />
    <Route path='/employees' element={'Employees'} />
    <Route path='/contracts' element={'Contracts'} />
    <Route path='/settings' element={'Settings'} />
  </Routes>
);

export default AppRouter;
