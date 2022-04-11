import React from 'react';
import { CardProps } from './CardProps';

export const Card = React.forwardRef(
  (props: CardProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { className, styleModifier, body, hover, sizeModifier, ...rest } =
      props;
    let classes = 'uk-card';
    classes += ` uk-card-${styleModifier ?? 'default'}`;
    if (body) {
      classes += ' uk-card-body';
    }
    if (hover) {
      classes += ' uk-card-hover';
    }
    if (sizeModifier) {
      classes += ` uk-card-${sizeModifier}`;
    }
    if (className) {
      classes += ' ' + className;
    }

    return <div ref={ref} className={classes} {...rest} />;
  }
);
