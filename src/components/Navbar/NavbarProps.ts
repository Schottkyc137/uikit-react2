import { HTMLProps, ReactNode } from 'react';

export interface NavbarProps {
  className?: string;

  /**
   * whether this component should also be used as the container.
   * If you do not set this attribute, add the 'uk-navbar-container'
   * class to a parent component to add background styling
   *
   * @default false
   */
  container?: boolean;

  children?: ReactNode;

  /**
   * dropdown trigger behavior modes
   */
  mode?: 'click' | 'hover';

  /**
   * Dropdown alignment
   *
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Enable or disable dropBar behavior.
   *
   * @default false
   */
  dropBar?: boolean;

  /**
   * The dropBar transition duration.
   *
   * @default 200
   */
  duration?: number;

  transparent?: boolean;
}

export interface NavigationProps {
  /**
   * where to align the navigation
   *
   * @default 'left'
   */
  alignment?: 'left' | 'center' | 'right';

  children?: ReactNode;
}

export interface NavbarDropdownProps extends HTMLProps<HTMLAnchorElement> {
  children?: ReactNode;

  dropdownTitle?: ReactNode;

  /**
   * set this to properly recognize up to four columns.
   * When you use this, wrap the Navigation in a `NavbarDropdownColumn` component
   */
  multiColumn?: boolean;
}

export interface NavbarDropdownColumnProps {
  children?: ReactNode;
}

export interface NavbarToggleProps
  extends HTMLProps<HTMLAnchorElement>,
    NavigationProps {}
