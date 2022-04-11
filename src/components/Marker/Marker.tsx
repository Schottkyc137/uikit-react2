import React from 'react';
import { MarkerProps } from './MarkerProps';
import { extendClasses } from '../util/class-names';

export function Marker({ x, y, className, style, ...rest }: MarkerProps) {
  return (
    <a
      className={extendClasses(
        className,
        'uk-position-absolute uk-transform-center'
      )}
      style={Object.assign(
        {
          left: `${x}%`,
          top: `${y}%`,
        },
        style
      )}
      {...rest}
      data-uk-marker
    />
  );
}
