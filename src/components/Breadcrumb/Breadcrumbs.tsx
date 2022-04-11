import React from 'react';
import { BreadcrumbsProps } from './BreadcrumbsProps';
import { extendClasses } from '../util/class-names';

/**
 * Create breadcrumbs to show users their location within a website.
 *
 * Create Single location elements with the `Crumb` or `PlainCrumb` component
 */
export const Breadcrumbs = React.forwardRef(
  (props: BreadcrumbsProps, ref: React.ForwardedRef<HTMLUListElement>) => {
    const { className, ...rest } = props;
    return (
      <ul
        ref={ref}
        className={extendClasses(className, 'uk-breadcrumb')}
        {...rest}
      />
    );
  }
);
