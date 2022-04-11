import React from 'react';
import { ContainerProps } from './ContainerProps';
import { extendClasses } from '../util/class-names';

export function Container({
  className,
  sizeModifier,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={extendClasses(
        className,
        'uk-container',
        sizeModifier ? `uk-container-${sizeModifier}` : undefined
      )}
      {...rest}
    />
  );
}
