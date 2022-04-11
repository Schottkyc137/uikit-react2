import { CommentBodyProps } from './CommentProps';
import { extendClasses } from '../util/class-names';
import React from 'react';

export const CommentBody = React.forwardRef(
  (props: CommentBodyProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { className, ...rest } = props;
    return (
      <div
        ref={ref}
        className={extendClasses(className, 'uk-comment-body')}
        {...rest}
      />
    );
  }
);
