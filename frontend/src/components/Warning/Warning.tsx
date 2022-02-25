import React from 'react';

import classes from './Warning.module.scss';

type WarningProps = {
  closeWarning: () => void;
  warningMessage: string;
  entityName: string;
  actionMessage: string;
  removeFunction: () => void;
}

const Warning: React.FC<WarningProps> = (props: WarningProps) => {

  const {
    closeWarning,
    entityName,
    warningMessage,
    actionMessage,
    removeFunction,
  } = props;

  const onCancel = () => {
    closeWarning();
  };

  const removeHandle = () => {
    removeFunction();
    closeWarning();
  };

  return (
    <div className={classes.component}>
      <div className={classes.window}>
        <div className={classes.question}>{entityName ? warningMessage : `${warningMessage} ?`}
          <div>{entityName ? `${entityName} ?`: '' }</div>
        </div>
        <div className={classes.littleWarning}>[Это действие необратимо]</div>
        <div className={classes.buttons}>
          <button className={classes.cancel} onClick={onCancel}>Отмена</button>
          <button className={classes.delete} onClick={removeHandle}>{actionMessage}</button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
