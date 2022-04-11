import { SubNavProps } from './NavProps';
import React from 'react';

export function SubNav({
  look,
  center,
  divider,
  dropdown,
  navbar,
  children,
  title,
}: SubNavProps) {
  let classes = 'uk-parent';
  classes += look ? ` uk-nav-${look}` : '';
  classes += center ? ' uk-nav-center' : '';
  classes += divider ? ' uk-nav-divider' : '';
  classes += dropdown ? ' uk-dropdown-nav' : '';
  classes += navbar ? ' uk-navbar-dropdown-nav' : '';

  if (title !== undefined) {
    return (
      <li className={classes}>
        <a href="/#">{title}</a>
        <ul className="uk-nav-sub">{children}</ul>
      </li>
    );
  } else {
    return (
      <li className={classes}>
        <ul className="uk-nav-sub">{children}</ul>
      </li>
    );
  }
}
