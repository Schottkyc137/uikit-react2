import React from 'react';
import { SelectProps } from './SelectProps';

export function Select({
  className,
  state,
  sizeModifier,
  widthModifier,
  blank,
  ...rest
}: SelectProps) {
  let classes = 'uk-select' + (className ? ' ' + className : '');
  classes += state ? ` uk-form-${state}` : '';
  classes += sizeModifier ? ` uk-form-${sizeModifier}` : '';
  classes += widthModifier ? ` uk-form-width-${widthModifier}` : '';
  classes += blank ? ' uk-form-blank' : '';
  return <select className={classes} {...rest} />;
}
