import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { Employee } from '../../types/Employee';
import EmployeeStore from '../../stores/EmployeeStore';
import Warning from '../Warning';
import Table from '../Table';

import classes from './Employees.module.scss';

const Employees: React.FC = observer(() => {
  const [showWarning, setShowWarning] = useState(false);
  const [employeeNameForWarning, setEmployeeNameForWarning] = useState('');
  const [employeeIdForWarning, setEmployeeIdForWarning] = useState('');

  const navigate = useNavigate();

  const dismissalHandle = (id: string, name: string) => {
    setEmployeeNameForWarning(name);
    setEmployeeIdForWarning(id);
    setShowWarning(true);
  };

  const closeWarning = () => {
    setShowWarning(false);
  };

  const addNewEmployee = () => {
    console.log(1);
  };

  const editEmployee = (id: string) => {
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
      name: 'Email',
    },
    {
      name: 'Номер телефон',
    },
    {
      name: 'Должность',
      class: 'positionField',
    },
    {
      name: 'Статус',
      class: 'deleteField',
    },
  ];

  const span = <span className={classes.fired}>Уволен</span>;

  const conditionForDelete = (value: Employee) => value.status === 'working';

  const body = EmployeeStore.employees;

  return (
    <div className={classes.component}>
      <Table
        tableHeaders={headers}
        edit={true}
        tableBody={body}
        handleOfEdit={editEmployee}
        remove={true}
        handleOfRemove={dismissalHandle}
        conditionForDelete={conditionForDelete}
        expressionInsteadOfDelete={span}
      />
      { showWarning && (
        <Warning
          warningMessage='Вы уверены что хотите уволить сотрудника:'
          closeWarning={closeWarning}
          entityName={employeeNameForWarning}
          removeFunction={() => EmployeeStore.dismissalEmployee(employeeIdForWarning)}
          actionMessage='Уволить'
        />
      )}
    </div>
  );
});

export default Employees;
