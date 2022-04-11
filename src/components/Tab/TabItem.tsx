import React from 'react';
import { TabItemProps } from './TabProps';
import { extendClasses } from '../util/class-names';

export function TabItem({
  title,
  active,
  disabled,
  className,
  children,
  ...rest
}: TabItemProps) {
  const resolvedTitle =
    typeof title === 'string' ? <a href="/#">{title}</a> : title;

  return (
    <>
      <li
        className={extendClasses(
          className,
          active ? 'uk-active' : undefined,
          disabled ? 'uk-disabled' : undefined
        )}
        {...rest}
      >
        {resolvedTitle}
      </li>
    </>
  );
}
