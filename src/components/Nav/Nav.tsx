import React from 'react';
import { NavProps } from './NavProps';
import { propsToUikitOptions } from '../util/uikit-props';

export function Nav({
  look,
  center,
  divider,
  dropdown,
  navbar,
  children,
  accordion,
}: NavProps) {
  let classes = 'uk-nav';
  classes += look ? ` uk-nav-${look}` : '';
  classes += center ? ' uk-nav-center' : '';
  classes += divider ? ' uk-nav-divider' : '';
  classes += dropdown ? ' uk-dropdown-nav' : '';
  classes += navbar ? ' uk-navbar-dropdown-nav' : '';

  if (accordion !== undefined) {
    classes += ' uk-nav-parent-icon';
    let accordionData =
      typeof accordion === 'boolean' ? '' : propsToUikitOptions(accordion);
    return (
      <ul className={classes} data-uk-nav={accordionData}>
        {children}
      </ul>
    );
  } else {
    return <ul className={classes}>{children}</ul>;
  }
}
