import React from 'react';
import { CommentMetaProps } from './CommentProps';
import { extendClasses } from '../util/class-names';

export const CommentMeta = React.forwardRef(
  (props: CommentMetaProps, ref: React.ForwardedRef<HTMLUListElement>) => {
    const { className, ...rest } = props;
    return (
      <ul
        ref={ref}
        className={extendClasses(className, 'uk-comment-meta')}
        {...rest}
      />
    );
  }
);
