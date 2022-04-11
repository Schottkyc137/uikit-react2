import React from 'react';
import { CardBodyProps } from './CardProps';
import { extendClasses } from '../util/class-names';

export const CardBody = React.forwardRef(
  (props: CardBodyProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { className, ...rest } = props;
    return (
      <div
        ref={ref}
        className={extendClasses(className, 'uk-card-body')}
        {...rest}
      />
    );
  }
);
