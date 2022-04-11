import React from 'react';
import { TextAreaProps } from './TextAreaProps';

export function TextArea({
  className,
  state,
  sizeModifier,
  widthModifier,
  blank,
  ...rest
}: TextAreaProps) {
  let classes = 'uk-textarea' + (className ? ' ' + className : '');
  classes += state ? ` uk-form-${state}` : '';
  classes += sizeModifier ? ` uk-form-${sizeModifier}` : '';
  classes += widthModifier ? ` uk-form-width-${widthModifier}` : '';
  classes += blank ? ' uk-form-blank' : '';
  return <textarea className={classes} {...rest} />;
}
