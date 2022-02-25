import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Table from '../Table';
import ClientsBoughtCarStore from '../../stores/ClientsBoughtCarStore';
import Warning from '../Warning';
import classes from './ClientsBoughtCar.module.scss';

const ClientsBoughtCar: React.FC = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [clientBoughtCarNameForWarning, setClientBoughtCarNameForWarning] = useState('');
  const [clientBoughtCarIdForWarning, setClientBoughtCarIdForWarning] = useState('');

  const removeHandle = (id: string, name: string) => {
    setClientBoughtCarNameForWarning(name);
    setClientBoughtCarIdForWarning(id);
    setShowWarning(true);
  };

  const navigate = useNavigate();

  const editClientBoughtCar = (id: string) => {
    navigate(id);
  };

  const closeWarning = () => {
    setShowWarning(false);
  };

  const headers = [
    {
      class: 'editField',
    },
    {
      name: 'ФИО',
    },
    {
      name: 'Номер телефона',
    },
    {
      name: 'Автомобиль',
      class: 'positionField',
    },
    {
      name: 'Номер договора',
    },
    {
      class: 'deleteField',
    },
  ];

  const body = ClientsBoughtCarStore.clientsBoughtCar;

  return (
    <div className={classes.component}>
      <Table
        tableHeaders={headers}
        tableBody={body}
        edit={true}
        handleOfEdit={editClientBoughtCar}
        remove={true}
        handleOfRemove={removeHandle}
        conditionForDelete={() => true}
      />
      { showWarning && (
        <Warning
          warningMessage='Вы уверены, что хотите удалить клиента:'
          actionMessage='Удалить'
          closeWarning={closeWarning}
          removeFunction={() => ClientsBoughtCarStore.deleteClientBoughtCart(clientBoughtCarIdForWarning)}
          entityName={clientBoughtCarNameForWarning}
        />
      )}
    </div>
  );
};

export default ClientsBoughtCar;
