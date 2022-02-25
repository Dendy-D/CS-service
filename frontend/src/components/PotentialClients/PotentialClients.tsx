import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Table from '../Table';
import PotentialClientsStore from '../../stores/PotentialClientsStore';
import Warning from '../Warning';
import classes from './PotentialClients.module.scss';

const PotentialClients: React.FC = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [potentialClientNameForWarning, setPotentialClientNameForWarning] = useState('');
  const [potentialClientIdForWarning, setPotentialClientIdForWarning] = useState('');

  const removeHandle = (id: string, name: string) => {
    setPotentialClientNameForWarning(name);
    setPotentialClientIdForWarning(id);
    setShowWarning(true);
  };

  const navigate = useNavigate();

  const editPotentialClient = (id: string) => {
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
      name: 'Номер телефон',
    },
    {
      name: 'Потенциальный автомобиль',
      class: 'positionField',
    },
    {
      name: 'Лизинг',
    },
    {
      class: 'deleteField',
    },
  ];

  const body = PotentialClientsStore.potentialClients;

  console.log(body);

  return (
    <div className={classes.component}>
      <Table
        tableHeaders={headers}
        tableBody={body}
        remove={true}
        handleOfRemove={removeHandle}
        conditionForDelete={() => true}
        edit={true}
        handleOfEdit={editPotentialClient}
      />
      { showWarning && (
        <Warning
          warningMessage='Вы уверены, что хотите удалить клиента:'
          actionMessage='Удалить'
          closeWarning={closeWarning}
          removeFunction={() => PotentialClientsStore.deletePotentialClient(potentialClientIdForWarning)}
          entityName={potentialClientNameForWarning}
        />
      )}
    </div>
  );
};

export default PotentialClients;
