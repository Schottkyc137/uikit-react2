import React from 'react';
import { NavbarProps } from './NavbarProps';
import { propsToUikitOptions } from '../util/uikit-props';

export function Navbar({
  className,
  children,
  container,
  mode,
  align,
  dropBar,
}: NavbarProps) {
  let classes = container ? 'uk-navbar-container' : '';
  classes += className ? ' ' + className : '';

  return (
    <nav
      className={classes}
      data-uk-navbar={propsToUikitOptions({
        mode: mode,
        align: align,
        dropbar: dropBar,
      })}
    >
      {children}
    </nav>
  );
}
