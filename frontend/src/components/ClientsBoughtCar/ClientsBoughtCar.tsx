import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Table from '../Table';
import ClientsBoughtCarStore from '../../stores/ClientsBoughtCarStore';
import classes from './ClientsBoughtCar.module.scss';

const ClientsBoughtCar: React.FC = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [potentialClientNameForWarning, setPotentialClientNameForWarning] = useState('');
  const [potentialClientIdForWarning, setPotentialClientIdForWarning] = useState('');

  const removeHandle = (id: string, name: string) => {
    setPotentialClientNameForWarning(name);
    setPotentialClientIdForWarning(id);
    setShowWarning(true);
  };

  const navigate = useNavigate();

  const editClientBoughtCar = (id: string) => {
    navigate(id);
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
    </div>
  );
};

export default ClientsBoughtCar;
