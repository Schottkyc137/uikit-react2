import React from 'react';
import { ContainerProps } from './ContainerProps';
import { extendClasses } from '../util/class-names';

export const Container = React.forwardRef(
  (props: ContainerProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { className, sizeModifier, ...rest } = props;
    return (
      <div
        ref={ref}
        className={extendClasses(
          className,
          'uk-container',
          sizeModifier ? `uk-container-${sizeModifier}` : undefined
        )}
        {...rest}
      />
    );
  }
);
