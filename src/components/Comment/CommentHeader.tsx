import React from 'react';
import { extendClasses } from '../util/class-names';
import { CommentHeaderProps } from './CommentProps';

export const CommentHeader = React.forwardRef(
  (props: CommentHeaderProps, ref: React.ForwardedRef<HTMLElement>) => {
    const { className, ...rest } = props;
    return (
      <header
        ref={ref}
        className={extendClasses(className, 'uk-comment-header')}
        {...rest}
      />
    );
  }
);
