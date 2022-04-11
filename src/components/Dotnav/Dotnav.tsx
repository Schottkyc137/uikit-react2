import React from 'react';
import { DotnavProps } from './DotnavProps';
import { extendClasses } from '../util/class-names';

export function Dotnav({
  className,
  vertical,
  count,
  active,
  activeChanges,
  ...rest
}: DotnavProps) {
  return (
    <ul
      className={extendClasses(
        className,
        'uk-dotnav',
        vertical ? 'uk-dotnav-vertical' : undefined
      )}
      {...rest}
    >
      {Array(count)
        .fill(0)
        .map((_, idx) => (
          <li
            className={idx === active ? 'uk-active' : undefined}
            onClick={() => activeChanges?.(idx)}
          >
            <a />
          </li>
        ))}
    </ul>
  );
}
