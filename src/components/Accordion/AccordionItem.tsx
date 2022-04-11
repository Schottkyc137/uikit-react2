import React from 'react';
import { AccordionItemProps } from './AccordionProps';
import { extendClasses } from '../util/class-names';

/**
 * The container class for an accordion item.
 *
 * The Props that are specific to the HTML-Element apply to the container
 * of the content
 * @param props
 * @constructor
 */
export function AccordionItem(props: AccordionItemProps) {
  const { className, title, open, ...rest } = props;

  return (
    <li className={open ? 'uk-open' : undefined}>
      <a className="uk-accordion-title" href="/#">
        {props.title}
      </a>
      <div
        className={extendClasses(className, 'uk-accordion-content')}
        {...rest}
      >
        {props.children}
      </div>
    </li>
  );
}
