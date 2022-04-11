import React from 'react';
import { CardBadgeProps } from './CardProps';
import { extendClasses } from '../util/class-names';

export const CardBadge = React.forwardRef(
  (props: CardBadgeProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { className, ...rest } = props;
    return (
      <div
        ref={ref}
        className={extendClasses(className, 'uk-card-badge')}
        {...rest}
      />
    );
  }
);
