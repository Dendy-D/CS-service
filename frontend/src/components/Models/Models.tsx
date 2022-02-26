import React from 'react';
import uniqueId from 'lodash/uniqueId';

import Card from '../Card';
import carsDataBase from '../../models/carsDB';
import FiltersPanel from '../FiltersPanel';
import classes from './Models.module.scss';

const Models: React.FC = () => (
  <div className={classes.component}>
    <div className={classes.filterPanel}>
      <FiltersPanel />
    </div>
    <div className={classes.cards}>
      {carsDataBase.map((car, index) => (
        <Card
          brand={car.brand}
          model={car.model}
          complectation={car.complectation}
          color={car.color}
          year={car.year}
          price={car.price}
          enginePower={car.enginePower}
          engineVolume={car.engineVolume}
          preview={car.preview}
          key={uniqueId(`car_${index}`)}
        />
      ))}
    </div>
  </div>
);

export default Models;
