import React from 'react';
import { extendClasses } from '../util/class-names';
import { CommentHeaderProps } from './CommentProps';

export function CommentHeader({ className, ...rest }: CommentHeaderProps) {
  return (
    <header
      className={extendClasses(className, 'uk-comment-header')}
      {...rest}
    />
  );
}
