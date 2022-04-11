import React from 'react';
import { CardMediaProps } from './CardProps';
import { extendClasses } from '../util/class-names';

export const CardMedia = React.forwardRef(
  (props: CardMediaProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { position, className, ...rest } = props;

    return (
      <div
        ref={ref}
        className={extendClasses(
          className,
          `uk-card-media-${position ?? 'top'}`
        )}
        {...rest}
      />
    );
  }
);
