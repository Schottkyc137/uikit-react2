import React from 'react';
import UIkit from 'uikit';
import { OffCanvasProps } from './OffCanvasProps';

export class OffCanvas extends React.Component<OffCanvasProps> {
  private el: HTMLDivElement | null;
  private offCanvas: UIkit.UIkitOffcanvasElement | null;

  public show() {
    if (this.offCanvas) {
      this.offCanvas.show();
    }
  }

  public hide() {
    if (this.offCanvas) {
      this.offCanvas.hide();
    }
  }

  componentDidMount() {
    if (this.el) {
      this.offCanvas = UIkit.offcanvas(this.el, Object.assign({}, this.props));
    }
  }

  render() {
    return <div ref={(el) => (this.el = el)} {...this.props} />;
  }
}
