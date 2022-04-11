import React from 'react';
import { DescriptionListProps } from './DescriptionListProps';
import { extendClasses } from '../util/class-names';

export function DescriptionList({
  className,
  divider,
  ...rest
}: DescriptionListProps) {
  return (
    <dl
      className={extendClasses(
        className,
        'uk-description-list',
        divider ? 'uk-description-list-divider' : undefined
      )}
      {...rest}
    />
  );
}
