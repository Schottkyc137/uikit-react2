import React from 'react';
import { PlaceholderProps } from './PlaceholderProps';
import { extendClasses } from '../util/class-names';
export function Placeholder({ className, ...rest }: PlaceholderProps) {
  return (
    <div className={extendClasses(className, 'uk-placeholder')} {...rest} />
  );
}
