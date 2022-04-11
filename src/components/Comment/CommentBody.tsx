import { CommentBodyProps } from './CommentProps';
import { extendClasses } from '../util/class-names';
import React from 'react';

export function CommentBody({ className, ...rest }: CommentBodyProps) {
  return (
    <div className={extendClasses(className, 'uk-comment-body')} {...rest} />
  );
}
