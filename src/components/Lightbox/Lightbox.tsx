import React from 'react';
import { LightboxProps } from './LightboxProps';
import UIkit from 'uikit';

export class Lightbox extends React.Component<LightboxProps> {
  private el: HTMLDivElement | null;
  private lightbox: UIkit.UIkitLightboxElement;

  componentDidMount() {
    if (this.el) {
      this.lightbox = UIkit.lightbox(this.el, {
        animation: this.props.animation,
        //@ts-ignore
        autoplay: this.props.autoplay,
        'autoplay-interval': this.props.autoplayInterval,
        'pause-on-hover': this.props.pauseOnHover,
        'video-autoplay': this.props.videoAutoplay,
        //@ts-ignore
        index: this.props.index,
        velocity: this.props.velocity,
        preload: this.props.preload,
        items: this.props.items,
        template: this.props.template,
        'delay-controls': this.props.delayControls,
        container: this.props.container,
      });
    }
  }

  public show(index: number) {
    this.lightbox?.show(index);
  }

  public hide() {
    this.lightbox?.hide();
  }

  render() {
    const { ...rest } = this.props;
    return <div ref={(el) => (this.el = el)} {...rest} />;
  }
}
