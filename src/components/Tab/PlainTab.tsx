import React from 'react';
import { TabProps } from './TabProps';
import UIkit from 'uikit';
import { extendClasses } from '../util/class-names';

export class PlainTab extends React.Component<TabProps> {
  private el: HTMLUListElement | null;
  private uikitTab: UIkit.UIkitTabElement | null;

  componentDidMount() {
    if (this.el) {
      const { toggle, active, animation, duration, swiping, media } =
        this.props;
      this.uikitTab = UIkit.tab(this.el, {
        toggle: toggle,
        active: active,
        // @ts-ignore
        animation: animation,
        duration: duration,
        swiping: swiping,
        media: media,
      });
    }
  }

  public show(index: number) {
    if (this.uikitTab) {
      this.uikitTab.show(index);
    }
  }

  render() {
    const { bottom, left, right, className, ...rest } = this.props;
    return (
      <ul
        ref={(el) => (this.el = el)}
        className={extendClasses(
          className,
          bottom ? 'uk-tab-bottom' : undefined,
          left ? 'uk-tab-left' : undefined,
          right ? 'uk-tab-right' : undefined
        )}
        {...rest}
      />
    );
  }
}
