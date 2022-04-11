import { CommentListProps } from './CommentProps';
import { extendClasses } from '../util/class-names';
import React from 'react';

export function CommentList({
  className,
  children,
  ...rest
}: CommentListProps) {
  return (
    <ul className={extendClasses(className, 'uk-comment-list')} {...rest}>
      {React.Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
}
