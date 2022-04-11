import React from 'react';
import { OverlayProps } from './OverlayProps';
import { extendClasses } from '../util/class-names';

export function Overlay({
  className,
  position,
  background,
  ...rest
}: OverlayProps) {
  return (
    <div
      className={extendClasses(
        className,
        'uk-overlay',
        position ? `uk-position-${position}` : undefined,
        background ? `uk-overlay-${background}` : undefined
      )}
      {...rest}
    />
  );
}
