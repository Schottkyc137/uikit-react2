import React from 'react';
import { DropdownProps } from './DropdownProps';
import UIkit from 'uikit';

export class Dropdown extends React.Component<DropdownProps> {
  private el: HTMLDivElement | null;
  private drop: UIkit.UIkitDropdownElement;

  componentDidMount() {
    if (this.el) {
      this.drop = UIkit.dropdown(this.el, {
        toggle: this.props.toggle,
        pos: this.props.pos,
        mode: this.props.mode,
        delayHide: this.props.delayHide,
        //@ts-ignore
        boundary: this.props.boundary,
        boundaryAlign: this.props.boundaryAlign,
        flip: this.props.flip,
        offset: this.props.offset,
        //@ts-ignore
        animation: this.props.animation,
        duration: this.props.duration,
      });
    }
  }

  public show() {
    this.drop?.show();
  }

  public hide(delay?: boolean) {
    //@ts-ignore
    this.drop?.hide(delay);
  }

  render() {
    const {
      toggle,
      pos,
      mode,
      delayHide,
      boundary,
      boundaryAlign,
      flip,
      offset,
      animation,
      duration,
      ...rest
    } = this.props;
    return <div ref={(el) => (this.el = el)} {...rest} />;
  }
}
