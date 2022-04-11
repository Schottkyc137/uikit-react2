import { HTMLProps } from 'react';

export interface DropdownProps extends HTMLProps<HTMLDivElement> {
  /**
   * CSS selector for the element to be used as toggle.
   * By default, the preceding element is used.
   *
   * @default - *
   */
  toggle?: string | boolean;

  /**
   * The position of the drop.
   *
   * @default bottom-left
   */
  pos?:
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'bottom-justify'
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'top-justify'
    | 'left-top'
    | 'left-center'
    | 'left-bottom'
    | 'right-top'
    | 'right-center'
    | 'right-bottom';

  /**
   * Drop trigger behaviour
   *
   * @default 'hover'
   */
  mode?: 'click' | 'hover';

  /**
   * Delay time in milliseconds before a drop is displayed in hover mode.
   *
   * @default 0
   */
  delayShow?: number;

  /**
   * Delay time in milliseconds before a drop is hidden in hover mode.
   *
   * @default 800
   */
  delayHide?: number;

  /**
   * CSS selector of the element to maintain the drop's visibility.
   * By default, it's the window.
   *
   * @default true
   */
  boundary?: string | boolean;

  /**
   * Align the drop to its boundary.
   *
   * @default false
   */
  boundaryAlign?: boolean;

  /**
   * Automatically flip the drop
   *
   * @default true
   */
  flip?: boolean | 'x' | 'y';

  /**
   * The offset of the drop's container.
   *
   * @default 0
   */
  offset?: number;

  /**
   * names of animations to apply.
   */
  animation?: string | string[];

  /**
   * Animation duration in milliseconds.
   *
   * @default 200
   */
  duration?: number;
}

export type DropdownNavProps = HTMLProps<HTMLUListElement>;
