import React from 'react';
import { AvatarProps } from './CommentProps';
import { extendClasses } from '../util/class-names';

export function Avatar({ className, alt, ...rest }: AvatarProps) {
  return (
    <img className={extendClasses(className, 'uk-comment-avatar')} {...rest} />
  );
}
