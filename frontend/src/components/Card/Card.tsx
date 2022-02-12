import React from 'react';
import clsx from 'clsx';

import { priceUnifier } from '../../utils/priceUnifier';
import classes from './Card.module.scss';

type CardProps = {
  brand?: string;
  model?: string;
  complectation?: string;
  color?: 'black' | 'white' | 'grey';
  year?: number;
  price?: number;
  preview?: string;
};

const URL = 'https://i.ibb.co/6N45SYR';

const l = {
  brand: 'Mercedes',
  model: 'Mercedes-Benz',
  complectation: 'GLS-Class',
  color: 'black',
  year: 2022,
  price: 10890000,
  preview: `${URL}/mers.png`,
};

const Card: React.FC<CardProps> = (props) => {
  const colorClasses = clsx({
    [classes.color]: true,
    [classes[l.color]]: !!l.color,
  });

  const price = priceUnifier(l.price);

  return (
    <div className={classes.component}>
      <div className={classes.cardHeader}>
        <span className={classes.model}>{l.model}</span>
      </div>
      <div className={classes.complectation}>{l.complectation}</div>
      <img src={l.preview} alt="car" className={classes.preview} />
      <div className={classes.cardBottom}>
        <div className={classes.colors}>
          <span>Цвета:</span>
          <span className={colorClasses} />
        </div>
        {price}
      </div>
    </div>
  );
};

export default Card;
