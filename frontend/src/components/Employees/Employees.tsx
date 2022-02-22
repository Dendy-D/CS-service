import React, { useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

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
            <th className={classes.deleteField}>Статус</th>
          </tr>
        </thead>

        <tbody>
          {EmployeeStore.employees.map((employee: Employee, index) => (
            <tr key={uniqueId(`employee_${index}`)}>
              <td className={classes.edit}>
                {<EditIcon className={classes.editIcon} onClick={() => editEmployee(employee.id)} />}
              </td>
              <td className={classes.fullName}>{employee.fullName}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.position}</td>
              <td className={classes.delete}>
                { employee.status === 'working' ?
                  (
                    <DeleteIcon
                      className={classes.deleteIcon}
                      onClick={() => dismissalHandle(employee.id, employee.fullName)}
                    />
                  ) : <span className={classes.fired}>Уволен</span>
                }
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
