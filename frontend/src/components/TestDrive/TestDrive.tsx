import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TestDriveEntryesStore from '../../stores/TestDriveEntryesStore';
import Warning from '../Warning';
import Table from '../Table';
import FiltersPanel from '../FiltersPanel';
import classes from './TestDrive.module.scss';

const TestDrive: React.FC = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [testDriveNameForWarning, setTestDriveNameForWarning] = useState('');
  const [testDriveIdForWarning, setTestDriveIdForWarning] = useState('');

  const removeHandle = (id: string, name: string) => {
    setTestDriveNameForWarning(name);
    setTestDriveIdForWarning(id);
    setShowWarning(true);
  };

  const navigate = useNavigate();

  const editClientBoughtCar = (id: string) => {
    navigate(id);
  };

  const closeWarning = () => {
    setShowWarning(false);
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
      <div className={classes.content}>
        <FiltersPanel />
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
      { showWarning && (
        <Warning
          warningMessage='Удалить запись'
          actionMessage='Удалить'
          closeWarning={closeWarning}
          removeFunction={() => TestDriveEntryesStore.deleteTestDriveEntry(testDriveIdForWarning)}
          entityName={testDriveNameForWarning}
        />
      )}
    </div>
  );
};

export default TestDrive;
