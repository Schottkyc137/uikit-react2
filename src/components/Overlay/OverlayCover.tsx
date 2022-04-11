import { OverlayCoverProps } from './OverlayProps';
import { extendClasses } from '../util/class-names';
import React from 'react';

export function OverlayCover({
  className,
  background,
  ...rest
}: OverlayCoverProps) {
  return (
    <div
      className={extendClasses(
        className,
        'uk-position-cover',
        background ? `uk-overlay-${background}` : undefined
      )}
      {...rest}
    />
  );
}
