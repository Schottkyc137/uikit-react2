import React from 'react';
import { ArticleMetaProps } from './ArticleProps';
import { extendClasses } from '../util/class-names';

export const ArticleMeta = React.forwardRef(
  (props: ArticleMetaProps, ref: React.ForwardedRef<HTMLParagraphElement>) => {
    const { className, ...rest } = props;
    return (
      <p
        ref={ref}
        className={extendClasses(className, 'uk-article-meta')}
        {...rest}
      />
    );
  }
);
