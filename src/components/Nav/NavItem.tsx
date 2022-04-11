import React from 'react';
import { NavItemProps } from './NavProps';
import { extendClasses } from '../util/class-names';

export function NavItem({
  active,
  className,
  children,
  ...rest
}: NavItemProps) {
  return (
    <li
      className={extendClasses(className, active ? 'uk-active' : undefined)}
      {...rest}
    >
      {children}
    </li>
  );
}
