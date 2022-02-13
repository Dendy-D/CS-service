import React from 'react';
import uniqueId from 'lodash/uniqueId';

import Card from '../Card';
import carsDataBase from '../../models/carsDB';
import classes from './CarsAvailable.module.scss';

const CarsAvailable: React.FC = () => (
  <div className={classes.component}>
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
);

export default CarsAvailable;
