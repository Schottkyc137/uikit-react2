import React from 'react';
import { CrumbProps } from './BreadcrumbsProps';
import { extendClasses } from '../util/class-names';

/**
 * renders a crumb that can be used in a `Breadcrumbs` component
 *
 * To use a crumb that displays no link, use the `PlainCrumb` component
 */
export const Crumb = React.forwardRef(
  (props: CrumbProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    const { className, disabled, ...rest } = props;
    if (disabled) {
      return (
        <li className={extendClasses(className, 'uk-disabled')}>
          <a ref={ref} {...rest} />
        </li>
      );
    } else {
      return (
        <li className={className}>
          <a ref={ref} {...rest} />
        </li>
      );
    }
  }
);
