import { HTMLProps } from 'react';

export interface OverlayProps extends HTMLProps<HTMLDivElement> {
  position?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center'
    | 'center-left'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'cover'
    | 'left-out'
    | 'right-out';

  background?: 'default' | 'primary';
}

export interface OverlayCoverProps extends HTMLProps<HTMLDivElement> {
  background?: 'default' | 'primary';
}

export interface OverlayIconProps extends HTMLProps<HTMLSpanElement> {
  icon?: string;
  ratio?: number;
}
