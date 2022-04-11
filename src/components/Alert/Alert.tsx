import React from 'react';
import { AlertProps } from './AlertProps';
import { extendClasses } from '../util/class-names';
import UIkit from 'uikit';

export class Alert extends React.Component<AlertProps> {
  private el: HTMLDivElement | null;
  private alert: UIkit.UIkitAlertElement;

  componentDidMount() {
    if (this.el) {
      this.alert = UIkit.alert(this.el, {
        animation: this.props.animation,
        duration: this.props.duration,
        'sel-close': this.props.selClose,
      });
    }
  }

  public close() {
    this.alert?.close();
  }

  render() {
    const {
      look,
      close,
      className,
      children,
      animation,
      duration,
      selClose,
      ...rest
    } = this.props;
    return (
      <div
        ref={(el) => (this.el = el)}
        className={extendClasses(
          className,
          look ? `uk-alert-${look}` : undefined
        )}
        {...rest}
      >
        {close ? <button data-uk-close className="uk-alert-close" /> : <></>}
        {children}
      </div>
    );
  }
}
