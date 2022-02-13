import React from 'react';
import clsx from 'clsx';

import { priceUnifier } from '../../utils/priceUnifier';
import { Car } from '../../types/Car';
import classes from './Card.module.scss';

type CardProps = Car

const Card: React.FC<CardProps> = (props: Car) => {

  const {
    brand,
    model,
    complectation,
    color,
    year,
    price,
    enginePower,
    engineVolume,
    preview,
  } = props;

  const colorClasses = clsx({
    [classes.color]: true,
    [classes[color]]: !!color,
  });

  return (
    <div className={classes.component}>
      <div className={classes.cardHeader}>
        <span className={classes.model}>{brand}</span>
      </div>
      <div className={classes.complectation}>{model}</div>
      <img src={preview} alt="car" className={classes.preview} />
      <div className={classes.cardBottom}>
        <div className={classes.colors}>
          <span>Цвета:</span>
          <span className={colorClasses} />
        </div>
        {priceUnifier(price)}
      </div>
    </div>
  );
};

export default Card;
