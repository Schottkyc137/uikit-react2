import React from 'react';
import { ColumnProps } from './ColumnProps';
import { extendClasses } from '../util/class-names';

export const Columns = React.forwardRef(
  (
    { className, count, divider, ...rest }: ColumnProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    let additionalClassNames: string;
    if (typeof count === 'number') {
      if (count > 6) {
        throw Error("Can' have more than 6 columns");
      }
      additionalClassNames = `uk-column-1-${count}`;
    } else {
      additionalClassNames = count
        .map((value) => `uk-column-1-${value}`)
        .join(' ');
    }
    if (divider) {
      additionalClassNames += ' uk-column-divider';
    }
    return (
      <div
        ref={ref}
        className={extendClasses(className, additionalClassNames)}
        {...rest}
      />
    );
  }
);
