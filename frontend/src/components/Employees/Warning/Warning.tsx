import React from 'react';

import EmployeeStore from '../../../stores/EmployeeStore';
import classes from './Warning.module.scss';

type WarningProps = {
  closeWarning: () => void;
  employeeName: string;
  employeeId: string;
}

const Warning: React.FC<WarningProps> = (props: WarningProps) => {

  const {
    closeWarning,
    employeeName,
    employeeId,
  } = props;

  const onCancel = () => {
    closeWarning();
  };

  const onRemove = () => {
    EmployeeStore.removeEmployee(employeeId);
    closeWarning();
  };

  return (
    <div className={classes.component}>
      <div className={classes.window}>
        <div className={classes.question}>Вы уверены что хотите удалить сотрудника:
          <div>{employeeName}?</div>
        </div>
        <div className={classes.littleWarning}>[Это действие необратимо]</div>
        <div className={classes.buttons}>
          <button className={classes.cancel} onClick={onCancel}>Отмена</button>
          <button className={classes.delete} onClick={onRemove}>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
