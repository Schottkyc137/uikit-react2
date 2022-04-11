import React from 'react';
import { InputProps } from './InputProps';

export function Input({
  className,
  state,
  sizeModifier,
  widthModifier,
  blank,
  ...rest
}: InputProps) {
  let classes: string;
  switch (rest.type) {
    case 'radio':
      classes = 'uk-radio';
      break;
    case 'checkbox':
      classes = 'uk-checkbox';
      break;
    case 'range':
      classes = 'uk-range';
      break;
    default:
      classes = 'uk-input';
      break;
  }
  classes += state ? ` uk-form-${state}` : '';
  classes += className ? ' ' + className : '';
  classes += sizeModifier ? ` uk-form-${sizeModifier}` : '';
  classes += widthModifier ? ` uk-form-width-${widthModifier}` : '';
  classes += blank ? ' uk-form-blank' : '';
  return <input className={classes} {...rest} />;
}
