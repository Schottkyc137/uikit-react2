import React from 'react';
import { CommentProps } from './CommentProps';
import { extendClasses } from '../util/class-names';

export function Comment({ className, primary, ...rest }: CommentProps) {
  return (
    <article
      className={extendClasses(
        className,
        'uk-comment',
        primary ? 'uk-comment-primary' : undefined
      )}
      {...rest}
    />
  );
}
