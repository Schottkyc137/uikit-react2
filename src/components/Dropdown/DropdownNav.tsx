import { DropdownNavProps } from './DropdownProps';
import { extendClasses } from '../util/class-names';
import React from 'react';

export function DropdownNav({ className, ...rest }: DropdownNavProps) {
  return (
    <ul
      className={extendClasses(className, 'uk-nav uk-dropdown-nav')}
      {...rest}
    />
  );
}
