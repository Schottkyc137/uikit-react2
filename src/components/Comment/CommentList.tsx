import { CommentListProps } from './CommentProps';
import { extendClasses } from '../util/class-names';
import React from 'react';

export const CommentList = React.forwardRef(
  (props: CommentListProps, ref: React.ForwardedRef<HTMLUListElement>) => {
    const { className, children, ...rest } = props;
    return (
      <ul
        ref={ref}
        className={extendClasses(className, 'uk-comment-list')}
        {...rest}
      >
        {React.Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    );
  }
);
