import { HTMLProps, ReactElement } from 'react';

export interface TabProps
  extends Omit<HTMLProps<HTMLUListElement>, 'media' | 'ref'> {
  /**
   * The toggle selector, which triggers content switching on click.
   *
   * @default > *
   */
  toggle?: string;

  /**
   * Active index on init. Providing a negative number
   * indicates a position starting from the end of the set.
   *
   * @default 0
   */
  active?: number;

  /**
   * The space separated names of animations to use.
   * Comma separate for animation out.
   *
   * @default false
   */
  animation?: string | false;

  /**
   * The animation duration.
   *
   * @default 200
   */
  duration?: number;

  /**
   * Use swiping.
   *
   * @default true
   */
  swiping?: boolean;

  /**
   * When to switch to horizontal mode - a width as integer (e.g. 640) or a
   * breakpoint (e.g. @s, @m, @l, @xl) or
   * any valid media query (e.g. (min-width: 900px)).
   *
   * @default 960
   */
  media?: string | number;

  /**
   * flip tab items to the bottom.
   */
  bottom?: boolean;

  left?: boolean;

  right?: boolean;
}

export interface TabItemProps extends Omit<HTMLProps<HTMLLIElement>, 'title'> {
  title?: string | ReactElement;
  active?: boolean;
  disabled?: boolean;
}
