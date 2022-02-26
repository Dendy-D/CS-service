import React from 'react';
import uniqueId from 'lodash/uniqueId';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import CarsStore from '../../stores/CarsStore';
import Card from '../Card';
import FiltersPanel from '../FiltersPanel';
import classes from './Cars.module.scss';

const Cars: React.FC = observer(() => {
  const navigate = useNavigate();

  const addNewCar = () => {
    navigate('add');
  };

  return (
    <div className={classes.component}>
      <div className={classes.filterPanel}>
        <FiltersPanel addEntity={addNewCar} />
      </div>
      <div className={classes.cards}>
        {CarsStore.cars.map((car, index) => (
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
});

export default Cars;
