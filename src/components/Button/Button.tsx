import React, { ForwardedRef } from 'react';
import { ButtonProps } from './ButtonProps';
import { extendClasses } from '../util/class-names';

export const Button = React.forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { look, className, size, ...rest } = props;
    return (
      <button
        className={extendClasses(
          className,
          `uk-button uk-button-${look || 'default'}`,
          size ? ` uk-button-${size}` : undefined
        )}
        ref={ref}
        {...rest}
      />
    );
  }
);
