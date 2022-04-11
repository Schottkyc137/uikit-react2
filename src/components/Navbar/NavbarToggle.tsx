import React from 'react';
import { NavbarToggleProps } from './NavbarProps';

export function NavbarToggle({
  children,
  alignment,
  className,
  ...rest
}: NavbarToggleProps) {
  const resolvedAlignment = alignment || 'left';
  const divClasses = `uk-navbar-${resolvedAlignment}`;

  const anchorClasses = 'uk-navbar-toggle' + (className ?? '');

  return (
    <div className={divClasses}>
      <a className={anchorClasses} {...rest}>
        <span data-uk-navbar-toggle-icon />
        <span className="uk-margin-small-left">{children}</span>
      </a>
    </div>
  );
}
