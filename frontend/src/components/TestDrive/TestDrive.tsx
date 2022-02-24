import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TestDriveEntryesStore from '../../stores/TestDriveEntryesStore';
import Table from '../Table';
import classes from './TestDrive.module.scss';

const TestDrive: React.FC = () => {
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

  const body = TestDriveEntryesStore.testDriveEntryes;

  const headers = [
    {
      class: 'editField',
    },
    {
      name: 'ФИО клиента',
    },
    {
      name: 'Автомобиль',
      class: 'positionField',
    },
    {
      name: 'ФИО сотрудника',
    },
    {
      name: 'Дата',
    },
    {
      class: 'deleteField',
    },
  ];

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

export default TestDrive;
