import { HTMLProps, ReactNode } from 'react';

export interface NavProps {
  children?: ReactNode;

  look?: 'default' | 'primary';

  center?: boolean;

  divider?: boolean;

  dropdown?: boolean;

  navbar?: boolean;

  accordion?:
    | {
        multiple?: boolean;
      }
    | boolean;

  /**
   * The element(s) to toggle.
   *
   * @default '> .uk-parent'
   */
  targets?: string;

  /**
   * The toggle element(s).
   *
   * @default '> a'
   */
  toggle?: string;

  /**
   * The content element(s).
   *
   * @default '> ul'
   */
  content?: string;

  /**
   * Allow all items to be closed.
   *
   * @default true
   */
  collapsible?: boolean;

  /**
   * Allow multiple open items.
   *
   * @default false
   */
  multiple?: boolean;

  /**
   * The transition to use.
   *
   * @default 'ease'
   */
  transition?: string;

  /**
   * The space separated names of animations to use.
   * Comma separate for animation out.
   *
   * @default true
   */
  animation?: string | true;

  /**
   * The animation duration in milliseconds.
   *
   * @default 200
   */
  duration?: number;
}

export interface SubNavProps extends NavProps {
  title?: string;
}

export interface NavItemProps extends HTMLProps<HTMLLIElement> {
  active?: boolean;

  children?: ReactNode;

  parent?: boolean;
}

export interface NavHeaderProps {
  children?: ReactNode;
}
