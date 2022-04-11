import React from 'react';
import { DividerProps } from './DividerProps';
import { extendClasses } from '../util/class-names';

export function Divider({
  icon,
  small,
  vertical,
  className,
  ...rest
}: DividerProps) {
  return (
    <hr
      className={extendClasses(
        className,
        icon ? 'uk-divider-icon' : undefined,
        small ? 'uk-divider-small' : undefined,
        vertical ? 'uk-divider-vertical' : undefined
      )}
      {...rest}
    />
  );
}
