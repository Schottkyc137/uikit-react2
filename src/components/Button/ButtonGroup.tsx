import React from 'react';
import { ButtonGroupProps } from './ButtonProps';
import { extendClasses } from '../util/class-names';

export const ButtonGroup = React.forwardRef(
  (props: ButtonGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { className, ...rest } = props;
    return (
      <div
        ref={ref}
        className={extendClasses(className, 'uk-button-group')}
        {...rest}
      />
    );
  }
);
