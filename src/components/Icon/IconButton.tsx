import { IconProps } from './IconProps';
import React, { HTMLProps } from 'react';
import { propsToUikitOptions } from '../util/uikit-props';

export function IconButton({
  icon,
  ratio,
  className,
  ...rest
}: IconProps & HTMLProps<HTMLAnchorElement>) {
  const classes = 'uk-icon-button' + (className ? ' ' + className : '');

  return (
    <a
      className={classes}
      {...rest}
      data-uk-icon={propsToUikitOptions({ icon: icon, ratio: ratio })}
    />
  );
}
