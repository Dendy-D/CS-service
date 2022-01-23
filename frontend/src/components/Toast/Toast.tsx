import React, { useState, useEffect } from 'react';
import uniqueId from 'lodash/uniqueId';
import clsx from 'clsx';

import { Type, Position, AnimationStyle } from './types/Toats';
// import classes from './Toast.module.scss';
import './Toast.scss';

//TODO: add other features to Toast (in blue comments)

//? currentAmount - give acsess to defined amound messages in one page
//? onClose - Обработчик события нажатия на кнопку "закрыть". Если задан, тогда кнопка отображается.

//! Add ===timer=== and ===close button=== by condition

type ToastProps = {
  message?: string;
  type?: Type;
  outline?: 'fill' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  maxAmount?: number;
  position?: Position;
  verticalOffset?: number;
  animationStyle?: AnimationStyle;
  animationSpeed?: number;
  accent?: boolean;
};

const Toast: React.FC<ToastProps> = React.memo(({
  message = 'Message by default',
  type = 'default',
  outline = 'fill',
  size = 'md',
  maxAmount = 1,
  position = 'right',
  verticalOffset = 20,
  animationStyle = 'scroll_to_left',
  animationSpeed = 60,
  accent = false,
}: ToastProps) => {
  const [currentAmount, setCurrentAmount ] = useState(1);
  // const [toastLife, setToastLife] = useState('life_begins');
  // const [isOpen, setOpen] = useState(open || false);
  console.log(open);

  // useEffect(() => {
  //   setOpen(open);
  // }, [open]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // if (isOpen) {
      // setOpen(false);
      // setShowToast(false);
      // }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const sliceMessage = (message.length > 50 ? message.slice(0, 50) + '...' : message);

  const getHeightComponent = () => {
    const heightComponent = maxAmount * verticalOffset;
    return heightComponent;
  };

  const arrayOfMessages: Array<string> = currentAmount !== 0
    ? new Array(currentAmount)
      .fill(message, 0)
      .slice(0, maxAmount)
    : new Array(currentAmount);

  const getRoundingNumber = (number: number) => Math.round(number / 10) * 10;

  const getLimitationsToNumber = (number: number) => {
    if (number > 250) return 250;
    if (number < 10) return 10;
    return number;
  };

  const convertedAnimationSpeed= getLimitationsToNumber(getRoundingNumber(animationSpeed));

  return (
    <>
      {/* {isOpen
        ? ( */}
      <div className={
        clsx('component', {
          [position]: !!position,
        })
      }
      style={{ height: `${getHeightComponent()}px` }}>
        {arrayOfMessages
          .map((mess, index) => (
            <div
              className={
                clsx('message', {
                  [type]: !!type,
                  [outline]: !!outline,
                  [animationStyle]: !!animationStyle,
                  [animationSpeed]: !!animationSpeed,
                  [size]: !!size,
                  'accent': accent,
                })
              }
              style={{ animationDuration: `${convertedAnimationSpeed / 100}s`}}
              key={uniqueId(`message_${index}`)}>
              {sliceMessage}
            </div>
          ))}
      </div>
      {/* )
        : '' */}
      {/* } */}
    </>
  );
});

Toast.displayName = 'Toast';

export default Toast;
