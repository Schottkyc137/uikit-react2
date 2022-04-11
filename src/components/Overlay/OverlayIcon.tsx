import React from 'react';
import { OverlayIconProps } from './OverlayProps';
import { propsToUikitOptions } from '../util/uikit-props';

export function OverlayIcon({ icon, ratio, ...rest }: OverlayIconProps) {
  return (
    <span
      {...rest}
      data-uk-overlay-icon={propsToUikitOptions({ icon: icon, ratio: ratio })}
    />
  );
}
