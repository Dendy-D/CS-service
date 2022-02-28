import React, { useState } from 'react';

import Table from '../Table';
import ContractsOfSaleStore from '../../stores/ContractsOfSaleStore';
import Warning from '../Warning';
import classes from './DealsMade.module.scss';

const DealsMade: React.FC = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [contarctOfSaleNameForWarning, setContaractOfSaleNameForWarning] = useState('');
  const [contarctOfSaleIdForWarning, setContractOfSaleIdForWarning] = useState('');

  const headers = [
    {
      name: 'ID клиента',
    },
    {
      name: 'ФИО продавца',
    },
    {
      name: 'ID Автомобиля',
      class: 'positionField',
    },
    {
      name: 'Дата сделки',
    },
    {
      name: 'Номер договора',
    },
  ];

  const body = ContractsOfSaleStore.contractsOfSaleForTable;

  const removeHandle = (id: string, name: string) => {
    setContaractOfSaleNameForWarning(name);
    setContractOfSaleIdForWarning(id);
    setShowWarning(true);
  };

  const closeWarning = () => {
    setShowWarning(false);
  };

  return (
    <div className={classes.component}>
      <Table
        tableHeaders={headers}
        tableBody={body}
        edit={false}
        remove={false}
        handleOfRemove={removeHandle}
        conditionForDelete={() => true}
      />
      { showWarning && (
        <Warning
          warningMessage='Вы уверены, что хотите удалить клиента:'
          actionMessage='Удалить'
          closeWarning={closeWarning}
          removeFunction={() => ContractsOfSaleStore.deleteContractOfSale(contarctOfSaleIdForWarning)}
          entityName={contarctOfSaleNameForWarning}
        />
      )}
    </div>
  );
};

export default DealsMade;
