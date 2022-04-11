import { CardHeaderProps } from './CardProps';
import React from 'react';
import { extendClasses } from '../util/class-names';

export const CardFooter = React.forwardRef(
  (props: CardHeaderProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { className, ...rest } = props;
    return (
      <div
        ref={ref}
        className={extendClasses(className, 'uk-card-footer')}
        {...rest}
      />
    );
  }
);
