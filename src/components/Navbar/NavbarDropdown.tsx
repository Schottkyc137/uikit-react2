import React from 'react';
import { NavbarDropdownProps } from './NavbarProps';
import { NavbarDropdownColumn } from './NavbarDropdownColumn';

/**
 * presents a dropdown with a list of choices.
 * The choices are `<NavItem/>` elements
 * or similar (i.e. <NavHeader/>, <NavDivider/>, ...).
 *
 * When you want to use multiple columns, set the `multiColumn` flag and
 * pass wrap the single dropdown-elements into a `<NavbarDropdownColumn/>`.
 * At most five columns are accepted
 *
 */
export function NavbarDropdown({
  children,
  dropdownTitle,
  multiColumn,
  ...rest
}: NavbarDropdownProps) {
  if (multiColumn) {
    if (!Array.isArray(children)) {
      throw Error(
        'Multicolumn was requested but the passed children are not an array'
      );
    }
    const count = children?.length;
    if (count) {
      if (count > 5) {
        throw Error('Navbar columns exceeds maximum of five.');
      }
    }
    return (
      <li>
        <a {...rest}>{dropdownTitle}</a>
        <div className={`uk-navbar-dropdown uk-navbar-dropdown-width-${count}`}>
          <div
            className={`uk-navbar-dropdown-grid uk-child-width-1-${count}`}
            data-uk-grid
          >
            {children}
          </div>
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <a {...rest}>{dropdownTitle}</a>
        <div className="uk-navbar-dropdown">
          <NavbarDropdownColumn>{children}</NavbarDropdownColumn>
        </div>
      </li>
    );
  }
}
