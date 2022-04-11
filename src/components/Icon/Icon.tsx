import React from 'react';
import { IconProps } from './IconProps';
import { propsToUikitOptions } from '../util/uikit-props';
import { extendClasses } from '../util/class-names';

export function Icon({ icon, ratio, className, ...rest }: IconProps) {
  return (
    <span
      className={extendClasses(className, 'uk-margin-small-right')}
      data-uk-icon={propsToUikitOptions({ icon: icon, ratio: ratio })}
      {...rest}
    />
  );
}
