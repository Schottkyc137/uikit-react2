import React from 'react';
import { NavHeaderProps } from './NavProps';

export function NavHeader(props: NavHeaderProps) {
  return <li className="uk-nav-header">{props.children}</li>;
}
