import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import uniqueId from 'lodash/uniqueId';
import clsx from 'clsx';

import Toast from '../Toast';
import { toastik } from '../..';
import { ToastProps } from '../../types/Toats';
import toastStore from '../../stores/toastStore';

const ToastContainer: React.FC<ToastProps> = React.memo(
  observer((props: ToastProps) => {
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

    toastStore.setAllProps(props);

    const toasts = toastStore.getToasts();

    const getHeightComponent = () => {
      const heightComponent = maxAmount * verticalOffset;
      return heightComponent;
    };

    const toastsContainerClasses = clsx('component', {
      [position]: !!position,
    });

    const toastsContainerStyles = {
      height: `${getHeightComponent()}px`,
    };

    return (
      <>
        <div
          className={toastsContainerClasses}
          style={toastsContainerStyles}
        >
          {toasts.length ? toasts.slice(0, maxAmount).map((toast, index) => (
            <React.Fragment key={uniqueId(`toast_${index}`)}>
              <Toast id={toast.id} />
            </React.Fragment>
          )) : ''}
          {/* {arrayOfMessages
          .map((mess, index) => (
            <Toast />
            <div
              className={messageClasses}
              style={{ animationDuration: `${convertedAnimationSpeed / 100}s`}}
              key={uniqueId(`message_${index}`)}>
              {close ?
                <CrossIcon className='crossIcon' onClick={onClose} />
                : ''}
              {sliceMessage}
            </div>
          ))} */}
        </div>
      </>
    );
  })
);

ToastContainer.displayName = 'ToastContainer';

export default ToastContainer;
