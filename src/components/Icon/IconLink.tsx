import { IconProps } from './IconProps';
import { HTMLProps } from 'react';
import React from 'react';
import { propsToUikitOptions } from '../util/uikit-props';

export function IconLink({
  icon,
  ratio,
  className,
  ...rest
}: IconProps & HTMLProps<HTMLAnchorElement>) {
  const classes = 'uk-icon-link' + (className ? ' ' + className : '');

  return (
    <a
      className={classes}
      {...rest}
      data-uk-icon={propsToUikitOptions({ icon: icon, ratio: ratio })}
    />
  );
}
