import React from 'react';
import { PlainCrumbProps } from './BreadcrumbsProps';

/**
 * A crumb without link
 */
export const PlainCrumb = React.forwardRef(
  (props: PlainCrumbProps, ref: React.ForwardedRef<HTMLSpanElement>) => {
    return (
      <li>
        <span ref={ref} {...props} />
      </li>
    );
  }
);
