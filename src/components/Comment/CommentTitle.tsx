import { CommentTitleProps } from './CommentProps';
import { extendClasses } from '../util/class-names';
import React from 'react';

export const CommentTitle = React.forwardRef(
  (props: CommentTitleProps, ref: React.ForwardedRef<HTMLHeadingElement>) => {
    const { className, ...rest } = props;
    return (
      <h4
        ref={ref}
        className={extendClasses(className, 'uk-comment-title')}
        {...rest}
      />
    );
  }
);
