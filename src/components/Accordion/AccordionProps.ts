import { HTMLProps } from 'react';

export interface AccordionProps extends HTMLProps<HTMLUListElement> {
  /**
   * Index of the element to open initially.
   *
   * @default false
   */
  active?: number | false;

  /**
   * Reveal item directly or with a transition.
   *
   * @default true
   */
  animation?: boolean;

  /**
   * Allow all items to be closed
   *
   * @default true
   */
  collapsible?: boolean;

  /**
   * The content selector, which selects the accordion content elements.
   *
   * @default '> .uk-accordion-content'
   */
  content?: string;

  /**
   * Animation duration in milliseconds.
   *
   * @default 200
   */
  duration?: number;

  /**
   * Allow multiple open items.
   *
   * @default false
   */
  multiple?: boolean;

  /**
   * CSS selector of the element(s) to toggle.
   *
   * @default '> *'
   */
  targets?: string;

  /**
   * The toggle selector, which toggles accordion items.
   *
   * @default '> .uk-accordion-title'
   */
  toggle?: string;

  /**
   * The transition to use when revealing items. Use keyword for easing functions.
   *
   * @default 'ease'
   */
  transition?: string;

  /**
   * Pixel offset added to scroll top.
   *
   * @default 0
   */
  offset?: number;
}

export interface AccordionItemProps extends HTMLProps<HTMLDivElement> {
  /**
   * whether this should be open initially.
   * You can also instead specify the active element of the parent accordion
   */
  open?: boolean;

  /**
   * The title of the item
   */
  title?: string;
}
