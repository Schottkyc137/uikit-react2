import { HTMLProps } from 'react';

export interface LeaderProps extends HTMLProps<HTMLDivElement> {
  /**
   * Optional fill character.
   *
   * @default '.'
   */
  fill?: string;

  /**
   * Condition for the space filling - a width as integer (e.g. 640)
   * or a breakpoint (e.g. @s, @m, @l, @xl)
   * or any valid media query (e.g. (min-width: 900px)).
   *
   * @default false
   */
  mediaCondition?: number | string | false;
}
