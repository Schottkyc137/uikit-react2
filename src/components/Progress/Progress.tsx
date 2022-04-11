import React from 'react';
import { ProgressProps } from './ProgressProps';
import { extendClasses } from '../util/class-names';

export function Progress({ className, ...rest }: ProgressProps) {
  return (
    <progress className={extendClasses(className, 'uk-progress')} {...rest} />
  );
}
