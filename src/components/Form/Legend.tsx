import React from 'react';
import { HTMLProps } from 'react';

export function Legend({ className, ...rest }: HTMLProps<HTMLLegendElement>) {
  const classes = 'uk-legend' + (className ? ' ' + className : '');

  return <legend className={classes} {...rest} />;
}
