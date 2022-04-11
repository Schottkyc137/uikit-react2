import React from 'react';
import { CardTitleProps } from './CardProps';
import { extendClasses } from '../util/class-names';

export const CardTitle = React.forwardRef(
  (
    { className, ...rest }: CardTitleProps,
    ref: React.ForwardedRef<HTMLHeadingElement>
  ) => {
    return (
      <h3
        ref={ref}
        className={extendClasses(className, 'uk-card-title')}
        {...rest}
      />
    );
  }
);
