import React from 'react';
import { NavbarDropdownColumnProps } from './NavbarProps';

export function NavbarDropdownColumn(props: NavbarDropdownColumnProps) {
  return <ul className="uk-nav uk-navbar-dropdown-nav">{props.children}</ul>;
}
