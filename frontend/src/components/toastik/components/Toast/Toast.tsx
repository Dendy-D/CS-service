import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import CSSTransitionGroup from 'react-transition-group';

import { ReactComponent as CrossIcon } from '../../icons/cross.svg';
import { ToastProps, Type, Position, AnimationStyle, Outline, Size } from '../../types/Toats';
import toastStore from '../../stores/toastStore';
import './Toast.scss';
import { observer } from 'mobx-react-lite';

//TODO: add other features to Toast (in blue comments)

//? currentAmount - give acsess to defined amound messages in one page

//! Add ===timer=== and ===close button=== by condition

const Toast: React.FC<ToastProps> = React.memo(observer(({id = ''}) => {

  const props = toastStore.getAllProps();

  console.log(id);

  const {
    message = 'Hello, I am toastik :)',
    outline = 'fill',
    type = 'default',
    size = 'small',
    // TODO: maxAmount
    maxAmount = 1,
    position = 'right',
    // TODO: verticalOffset
    verticalOffset = 100,
    animationStyle = 'scroll_to_left',
    animationSpeed = 60,
    accent = false,
    close = true,
  } = props;

  const [currentAmount, setCurrentAmount ] = useState(1);
  const [hide, setHide] = useState(false);

  const onClose = () => {
    setHide(true);

    //TODO:>>> Functionality for delete by timer
    setTimeout(() => {
      toastStore.removeToast(id);
    }, 100);
  };

  const sliceMessage = (message.length > 50 ? message.slice(0, 50) + '...' : message);

  const getHeightComponent = () => {
    const heightComponent = maxAmount * verticalOffset;
    return heightComponent;
  };

  // const arrayOfMessages: Array<string> = currentAmount !== 0
  //   ? new Array(currentAmount)
  //     .fill(message, 0)
  //     .slice(0, maxAmount)
  //   : new Array(currentAmount);

  const getRoundingNumber = (number: number) => Math.round(number / 10) * 10;

  const getLimitationsToNumber = (number: number) => {
    if (number > 250) return 250;
    if (number < 10) return 10;
    return number;
  };

  const convertedAnimationSpeed= getLimitationsToNumber(getRoundingNumber(animationSpeed));

  const messageClasses = clsx('message', {
    [type]: !!type,
    [outline]: !!outline,
    [animationStyle]: !!animationStyle,
    [animationSpeed]: !!animationSpeed,
    [size]: !!size,
    hide: hide,
    'accent': accent,
  });

  const messageStyles = { animationDuration: `${convertedAnimationSpeed / 100}s`};

  return (
    <div
      className={messageClasses}
      style={messageStyles}
    >
      {close ?
        <CrossIcon className='crossIcon' onClick={onClose} />
        : ''}
      {sliceMessage}
    </div>
  );
}));

Toast.displayName = 'Toast';

export default Toast;
