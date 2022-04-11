import React from 'react';
import { ArticleTitleProps } from './ArticleProps';
import { extendClasses } from '../util/class-names';

export const ArticleTitle = React.forwardRef(
  (props: ArticleTitleProps, ref: React.ForwardedRef<HTMLHeadingElement>) => {
    const { className, ...rest } = props;
    return (
      <h1
        ref={ref}
        className={extendClasses(className, 'uk-article-title')}
        {...rest}
      />
    );
  }
);
