import React from 'react';
import { IconNavProps } from './IconNavProps';

export function IconNav({ children, alignment }: IconNavProps) {
  const classes =
    'uk-iconnav' + (alignment === 'vertical' ? ' uk-iconnav-vertical' : '');

  return (
    <ul className={classes}>
      {React.Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
}
