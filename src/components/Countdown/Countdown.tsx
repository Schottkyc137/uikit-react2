import React from 'react';
import { CountdownProps } from './CountdownProps';
import UIkit from 'uikit';

export class Countdown extends React.Component<CountdownProps> {
  private el: HTMLDivElement | null;
  private countdown: UIkit.UIkitCountdownElement;

  componentDidMount() {
    if (this.el) {
      this.countdown = UIkit.countdown(this.el, {
        date: this.props.to.toISOString(),
      });
    }
  }

  public start() {
    this.countdown?.start();
  }

  public stop() {
    this.countdown?.stop();
  }

  render() {
    const { to, ...rest } = this.props;
    return <div ref={(el) => (this.el = el)} {...rest} />;
  }
}
