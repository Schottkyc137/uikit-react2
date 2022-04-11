import React from 'react';
import { Legend } from './Legend';
import { FieldSetProps } from './FormProps';

export function FieldSet({ className, legend, ...rest }: FieldSetProps) {
  let classes = 'uk-fieldset' + (className ? ' ' + className : '');

  if (legend) {
    return (
      <fieldset className={classes} {...rest}>
        <Legend>{legend}</Legend>
        {rest.children}
      </fieldset>
    );
  } else {
    return <fieldset className={classes} {...rest} />;
  }
}
