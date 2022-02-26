import React from 'react';

import AddEntity from './AddEntity';
import classes from './FiltersPanel.module.scss';

type FiltersPanelProps = {
  addEntity: () => void;
}

const FiltersPanel: React.FC<FiltersPanelProps> = (props: FiltersPanelProps) => {
  const { addEntity } = props;

  return (
    <div className={classes.component}>
      <div className={classes.content}>
        <AddEntity addEntity={addEntity} />
      </div>
      <div className={classes.bottomLine}/>
    </div>
  );
};

export default FiltersPanel;
