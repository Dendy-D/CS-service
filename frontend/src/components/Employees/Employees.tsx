import React, { useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import { observer } from 'mobx-react-lite';

import { Employee } from '../../types/Employee';
import { ReactComponent as EditIcon } from './icons/edit.svg';
import { ReactComponent as DeleteIcon } from './icons/delete.svg';
import EmployeeStore from '../../stores/EmployeeStore';
import Warning from './Warning';

import classes from './Employees.module.scss';

const Employees: React.FC = observer(() => {
  const [showWarning, setShowWarning] = useState(false);
  const [employeeNameForWarning, setEmployeeNameForWarning] = useState('');
  const [employeeIdForWarning, setEmployeeIdForWarning] = useState('');

  const onDelete = (id: string, name: string) => {
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

  return (
    <div className={classes.component}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.editField} />
            <th>ФИО</th>
            <th>Email</th>
            <th>Номер телефона</th>
            <th className={classes.positionField}>Должность</th>
            <th className={classes.deleteField}/>
          </tr>
        </thead>

        <tbody>
          {EmployeeStore.employees.map((employee: Employee, index) => (
            <tr key={uniqueId(`employee_${index}`)}>
              <td className={classes.edit}>
                {<EditIcon className={classes.editIcon} onClick={addNewEmployee} />}
              </td>
              <td className={classes.fullName}>{employee.fullName}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.position}</td>
              <td className={classes.delete}>
                {<DeleteIcon className={classes.deleteIcon} onClick={() => onDelete(employee.id, employee.fullName)} />}
              </td>
            </tr>
          ))}
        </tbody>
        { showWarning && (
          <Warning
            closeWarning={closeWarning}
            employeeName={employeeNameForWarning}
            employeeId={employeeIdForWarning}
          />
        )}
      </table>
    </div>
  );
});

export default Employees;
