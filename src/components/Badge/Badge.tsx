import React from 'react';
import { BadgeProps } from './BadgeProps';
import { extendClasses } from '../util/class-names';

/**
 * Displays nice looking notification badges.
 *
 * If you want to use the badge inside a card, use the `CardBadge` Component instead
 */
export const Badge = React.forwardRef(
  (props: BadgeProps, ref: React.ForwardedRef<HTMLSpanElement>) => {
    const { className, ...rest } = props;
    return (
      <span
        ref={ref}
        className={extendClasses(className, 'uk-badge')}
        {...rest}
      />
    );
  }
);
