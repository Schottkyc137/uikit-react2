import React from 'react';
import { AvatarProps } from './CommentProps';
import { extendClasses } from '../util/class-names';

export const Avatar = React.forwardRef(
  (props: AvatarProps, ref: React.ForwardedRef<HTMLImageElement>) => {
    const { className, alt, ...rest } = props;
    return (
      <img
        ref={ref}
        className={extendClasses(className, 'uk-comment-avatar')}
        {...rest}
      />
    );
  }
);
