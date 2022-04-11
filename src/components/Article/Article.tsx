import React from 'react';
import { extendClasses } from '../util/class-names';
import { ArticleProps } from './ArticleProps';

export const Article = React.forwardRef(
  (props: ArticleProps, ref: React.ForwardedRef<HTMLElement>) => {
    const { className, ...rest } = props;
    return (
      <article
        ref={ref}
        className={extendClasses(className, 'uk-article')}
        {...rest}
      />
    );
  }
);
