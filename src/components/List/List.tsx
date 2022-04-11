import React from 'react';
import { ListProps } from './ListProps';

export function List({
  className,
  marker,
  colorModifier,
  divider,
  striped,
  sizeModifier,
  ...rest
}: ListProps) {
  let classes = 'uk-list';
  if (marker) {
    classes += ` uk-list-${marker}`;
  }
  if (className) {
    classes += ' ' + className;
  }
  if (colorModifier) {
    classes += ` uk-list-${colorModifier}`;
  }
  if (divider) {
    classes += ' uk-list-divider';
  }
  if (striped) {
    classes += ' uk-list-striped';
  }
  if (sizeModifier) {
    classes += ` uk-list-${sizeModifier}`;
  }

  return <ul className={classes} {...rest} />;
}
