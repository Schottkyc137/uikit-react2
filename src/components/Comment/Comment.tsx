import React from 'react';
import { CommentProps } from './CommentProps';
import { extendClasses } from '../util/class-names';

export const Comment = React.forwardRef(
  (props: CommentProps, ref: React.ForwardedRef<HTMLElement>) => {
    const { className, primary, ...rest } = props;
    return (
      <article
        ref={ref}
        className={extendClasses(
          className,
          'uk-comment',
          primary ? 'uk-comment-primary' : undefined
        )}
        {...rest}
      />
    );
  }
);
