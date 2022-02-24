import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Auth from '../Auth';
import Models from '../Models';
import Layout from '../Layout';
import Employees from '../Employees';
import EmployeeForm from '../Employees/EmployeeForm';
import Clients from '../Clients';
import PotentialClients from '../PotentialClients';
import PotentialClientForm from '../PotentialClients/PotentialClientForm';

const App: React.FC = () => (
  <Routes>
    <Route path='/auth' element={<Auth />} />
    <Route path='/' element={<Layout />}>
      <Route path='models' element={<Models />} />
      <Route path='employees' element={<Employees />} />
      <Route path='employees/:id' element={<EmployeeForm /> } />
      <Route path='clients' element={<Clients />} />
      <Route path='potential-clients' element={<PotentialClients /> } />
      <Route path='potential-clients/:id' element={<PotentialClientForm /> } />
    </Route>
  </Routes>
);

export default App;
