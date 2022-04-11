import React from 'react';
import { LeaderProps } from './LeaderProps';
import { propsToUikitOptions } from '../util/uikit-props';

export function Leader({
  fill,
  mediaCondition,
  children,
  ...rest
}: LeaderProps) {
  return (
    <div
      data-uk-leader={propsToUikitOptions({
        fill: fill,
        media: mediaCondition,
      })}
      {...rest}
    >
      {children}
    </div>
  );
}
