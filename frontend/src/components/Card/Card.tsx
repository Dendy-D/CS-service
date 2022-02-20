import React, { useState } from 'react';
import clsx from 'clsx';

import { priceUnifier } from '../../utils/priceUnifier';
import { Car } from '../../types/Car';
import classes from './Card.module.scss';
import Modal from '../Modal';

const Card: React.FC<Car> = (props: Car) => {

  const [showModal, setShowModal] = useState(false);

  const onModal = () => {
    setShowModal(!showModal);
  };

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
    [classes.square]: true,
    [classes[color]]: !!color,
  });

  return (
    <>
      <div className={classes.component} onClick={onModal}>
        <div className={classes.cardHeader}>
          <span className={classes.brand}>{brand}</span>
        </div>
        <div className={classes.model}>{model}</div>
        <img src={preview} alt="car" className={classes.preview} />
        <div className={classes.cardBottom}>
          <div className={classes.colors}>
            <span>Цвет:</span>
            <span className={colorClasses} />
          </div>
          <div className={classes.price}>{priceUnifier(price)}</div>
        </div>
      </div>
      {showModal && <Modal
        brand={brand}
        model={model}
        complectation={complectation}
        color={color}
        year={year}
        price={price}
        enginePower={enginePower}
        engineVolume={engineVolume}
        preview={preview}
        handlerClose={onModal}
        showModal={showModal}
      />}
    </>
  );
};

export default Card;
