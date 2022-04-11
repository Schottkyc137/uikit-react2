import React from 'react';
import { FormProps } from './FormProps';

export function Form({ layout, className, ...rest }: FormProps) {
  let classes = layout ? `uk-form-${layout} ` : undefined;
  classes = className ? className + (classes ?? '') : classes;

  return <form className={classes} {...rest} />;
}
