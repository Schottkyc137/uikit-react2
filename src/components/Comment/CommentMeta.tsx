import React from 'react';
import { CommentMetaProps } from './CommentProps';
import { extendClasses } from '../util/class-names';

export function CommentMeta({ className, ...rest }: CommentMetaProps) {
  return (
    <ul className={extendClasses(className, 'uk-comment-meta')} {...rest} />
  );
}
