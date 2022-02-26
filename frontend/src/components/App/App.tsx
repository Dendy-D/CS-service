import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Auth from '../Auth';
import Cars from '../Cars';
import CarAddForm from '../Cars/CarAddForm';
import Layout from '../Layout';
import Employees from '../Employees';
import EmployeeEditForm from '../Employees/EmployeeEditForm';
import EmployeeAddForm from '../Employees/EmployeeAddForm';
import Clients from '../Clients';
import PotentialClients from '../PotentialClients';
import PotentialClientEditForm from '../PotentialClients/PotentialClientEditForm';
import PotentialClientAddForm from '../PotentialClients/PotentialClientAddForm';
import ClientsBoughtCar from '../ClientsBoughtCar';
import ClientsBoughtCarEditForm from '../ClientsBoughtCar/ClientsBoughtCarEditForm';
import ClientsBoughtCarAddForm from '../ClientsBoughtCar/ClientsBoughtCarAddForm';
import TestDrive from '../TestDrive';
import TestDriveEditForm from '../TestDrive/TestDriveEditForm';
import TestDriveAddForm from '../TestDrive/TestDriveAddForm';

const App: React.FC = () => (
  <Routes>
    <Route path='/auth' element={<Auth />} />
    <Route path='/' element={<Layout />}>
      <Route path='models' element={<Cars />} />
      <Route path='models/add' element={<CarAddForm />} />
      <Route path='employees' element={<Employees />} />
      <Route path='employees/:id' element={<EmployeeEditForm /> } />
      <Route path='employees/add' element={<EmployeeAddForm /> } />
      <Route path='clients' element={<Clients />} />
      <Route path='potential-clients' element={<PotentialClients /> } />
      <Route path='potential-clients/:id' element={<PotentialClientEditForm /> } />
      <Route path='potential-clients/add' element={<PotentialClientAddForm /> } />
      <Route path='clients-bought-car' element={<ClientsBoughtCar /> } />
      <Route path='clients-bought-car/:id' element={<ClientsBoughtCarEditForm /> } />
      <Route path='clients-bought-car/add' element={<ClientsBoughtCarAddForm /> } />
      <Route path='test-drive' element={<TestDrive />} />
      <Route path='test-drive/:id' element={<TestDriveEditForm />} />
      <Route path='test-drive/add' element={<TestDriveAddForm />} />
    </Route>
  </Routes>
);

export default App;
