import React from 'react';
import clsx from 'clsx';

import { ReactComponent as CrossIcon } from './assets/cross.svg';
import { CarForForm } from '../../types/Car';
import { priceUnifier } from '../../utils/priceUnifier';
import classes from './Modal.module.scss';

type CardProps<T> = T & {
  showModal: boolean,
  handlerClose: () => void,
};

const Modal: React.FC<CardProps<CarForForm>> = (props: CardProps<CarForForm>) => {
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
    showModal,
    handlerClose,
  } = props;

  const colorClasses = clsx({
    [classes.square]: true,
    [classes[color]]: !!color,
  });

  return (
    <>
      {showModal && (
        <div className={classes.component}>
          <div className={classes.window}>
            <div>
              <div className={classes.modalHeader}>
                <span className={classes.brand}>{brand}</span>
              </div>
              <div className={classes.model}>{model}</div>
              <div className={classes.previewWrapper}>
                <img src={preview} alt="car" className={classes.preview} />
              </div>
              <div className={classes.colors}>
                <span>Цвет:</span>
                <span className={colorClasses} />
              </div>
              <div className={classes.price}>
                Цена: {priceUnifier(price)}
              </div>
            </div>
            <div className={classes.additionalInfo}>
              <div>
                <div>
                  Комплектация: <span>{complectation}</span>
                </div>
                <div>
                  Год выпуска: <span>{year}</span>
                </div>
              </div>
              <div>
                <div>
                  Мощность двигателя: <span>{enginePower}</span>
                </div>
                <div>
                  Объем двигателя: <span>{engineVolume}</span>
                </div>
              </div>
            </div>
            <CrossIcon className={classes.crossIcon} onClick={handlerClose}/>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
