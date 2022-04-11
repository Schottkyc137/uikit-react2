import React from 'react';
import { AccordionProps } from './AccordionProps';
import UIkit from 'uikit';

/**
 * Create a list of items that can be shown individually by clicking an item's header.
 * You create an accordion by using the `Accordion` as parent element
 * with one or more `AccordionItem`s as children. These children can
 * have arbitrary content.
 * <pre>{@code
 * <Accordion>
 *   <AccordionItem>...</AccordionItem>
 *   <AccordionItem>...</AccordionItem>
 * </Accordion>
 * }</pre>
 */
export class Accordion extends React.Component<AccordionProps> {
  private el: HTMLUListElement | null;
  private accordion: UIkit.UIkitAccordionElement | null;

  componentDidMount() {
    if (this.el !== null) {
      this.accordion = UIkit.accordion(this.el, {
        //@ts-ignore
        active: this.props.active,
        animation: this.props.animation,
        collapsible: this.props.collapsible,
        content: this.props.content,
        duration: this.props.duration,
        multiple: this.props.multiple,
        targets: this.props.targets,
        toggle: this.props.toggle,
        transition: this.props.transition,
        offset: this.props.offset,
      });
    }
  }

  /**
   * Toggles the content pane.
   * @param index Accordion pane to toggle. 0 based index.
   * @param animate Suppress opening animation by passing false.
   */
  public toggle(index: number, animate: boolean) {
    this.accordion?.toggle(index, animate);
  }

  render() {
    const {
      active,
      animation,
      collapsible,
      content,
      duration,
      multiple,
      targets,
      toggle,
      transition,
      offset,
      ...rest
    } = this.props;
    return (
      <ul data-testid="accordion" ref={(el) => (this.el = el)} {...rest} />
    );
  }
}
