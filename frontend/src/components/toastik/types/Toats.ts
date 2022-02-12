export type ToastProps = {
  id?: string;

  message?: string;

  type?: Type;

  outline?: Outline;

  size?: Size;

   // TODO: maxAmount
  maxAmount?: number;

  position?: Position;

  // TODO: verticalOffset
  verticalOffset?: number;

  animationStyle?: AnimationStyle;

  animationSpeed?: number;

  accent?: boolean;

  close?: boolean;

  onClick?: () => void
};

export type Tost = {
  id: string;
}

export type Type = 'error' | 'warning' | 'sucsess' | 'default';

export type Position = 'left' | 'right' | 'center';

export type AnimationStyle = 'scroll_to_left' | 'scroll_to_right' | 'scroll_to_top' | 'scroll_to_bottom';

export type Outline = 'fill' | 'outline';

export type Size = 'small' | 'medium' | 'large';
