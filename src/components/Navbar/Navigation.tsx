import React from 'react';
import { NavigationProps } from './NavbarProps';

export function Navigation(props: NavigationProps) {
  const alignment = props.alignment || 'left';
  const classes = `uk-navbar-${alignment}`;

  return (
    <div className={classes}>
      <ul className="uk-navbar-nav">{props.children}</ul>
    </div>
  );
}
