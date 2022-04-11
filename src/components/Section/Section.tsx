import React, { ForwardedRef } from 'react';
import { SectionProps } from './SectionProps';
import { extendClasses } from '../util/class-names';

export const Section = React.forwardRef(
  (
    {
      className,
      styleModifier,
      preserveColors,
      sizeModifier,
      overlap,
      ...rest
    }: SectionProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={extendClasses(
          className,
          'uk-section',
          styleModifier ? `uk-section-${styleModifier}` : undefined,
          preserveColors ? 'uk-preserve-color' : undefined,
          sizeModifier ? `uk-section-${sizeModifier}` : undefined,
          overlap ? 'uk-section-overlap' : undefined
        )}
        ref={ref}
        {...rest}
      />
    );
  }
);
