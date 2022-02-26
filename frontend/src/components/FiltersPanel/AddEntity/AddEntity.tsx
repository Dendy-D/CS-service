import React from 'react';

import classes from './AddEntity.module.scss';

type AddEntityProps = {
  addEntity: () => void;
}

const AddEntity: React.FC<AddEntityProps> = (props: AddEntityProps) => {
  const { addEntity } = props;

  return (
    <div className={classes.component}>
      <button className={classes.button} onClick={addEntity}>
        <span>+</span>
      </button>
    </div>
  );
};

export default AddEntity;
