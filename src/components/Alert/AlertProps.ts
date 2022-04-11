import { HTMLProps } from 'react';

export interface AlertProps extends HTMLProps<HTMLDivElement> {
  /**
   * Applies a look based on a preset of looks
   */
  look?: 'primary' | 'success' | 'warning' | 'danger';
  /**
   * display a button that closes the alert
   *
   * @default false
   */
  close?: boolean;
  /**
   * Fade out or use the Animation component.
   *
   * @default true
   */
  animation?: boolean | string;
  /**
   * Animation duration in milliseconds.
   *
   * @default 150
   */
  duration?: number;
  /**
   * The close trigger element.
   *
   * @default '.uk-alert-close'
   */
  selClose?: string;
}
