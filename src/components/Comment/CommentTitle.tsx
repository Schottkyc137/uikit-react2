import { CommentTitleProps } from './CommentProps';
import { extendClasses } from '../util/class-names';
import React from 'react';

export function CommentTitle({ className, ...rest }: CommentTitleProps) {
  return (
    <h4 className={extendClasses(className, 'uk-comment-title')} {...rest} />
  );
}
