import { makeAutoObservable } from 'mobx';

import { ToastProps, Type, Position, AnimationStyle, Outline, Size, Tost } from '../types/Toats';

class ToastStore {

  private message?: string = 'Hello, I am toastik :)';

  private type?: Type = 'default';

  private outline?: Outline = 'fill';

  private size?: Size = 'medium';

  private maxAmount?: number = 1;

  private position?: Position = 'right';

  private verticalOffset?: number = 20;

  private animationStyle?: AnimationStyle = 'scroll_to_left';

  private animationSpeed?: number = 60;

  private accent?: boolean = false;

  private close?: boolean = true;

  toastsAmount: Array<Tost> = [];

  constructor() {
    makeAutoObservable(this);
  }

  getAllProps() {
    return {
      message: this.message,
      type: this.type,
      outline: this.outline,
      size: this.size,
      maxAmount: this.maxAmount,
      position: this.position,
      verticalOffset: this.verticalOffset,
      animationStyle: this.animationStyle,
      animationSpeed: this.animationSpeed,
      accent: this.accent,
      close: this.close,
    };
  }

  setAllProps(props: ToastProps) {
    this.message = props.message || this.message;
    this.type = props.type || this.type;
    this.outline = props.outline || this.outline;
    this.size = props.size || this.size;
    this.maxAmount = props.maxAmount || this.maxAmount;
    this.position = props.position || this.position;
    this.verticalOffset = props.verticalOffset || this.verticalOffset;
    this.animationStyle = props.animationStyle || this.animationStyle;
    this.animationSpeed = props.animationSpeed || this.animationSpeed;
    this.accent = props.accent || this.accent;
    this.close = props.close || this.close;

    return 'sucsess';
  }

  getToasts() {
    return this.toastsAmount;
  }

  addToast(id: string) {
    if (this.maxAmount && this.toastsAmount.length < this.maxAmount) {
      this.toastsAmount.push({id});
    }
  }

  removeToast(id: string) {
    this.toastsAmount = this.toastsAmount.filter((toast) => toast.id !== id);
  }

}

export default new ToastStore();
