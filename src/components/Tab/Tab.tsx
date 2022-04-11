import React from 'react';
import { TabProps } from './TabProps';
import { PlainTab } from './PlainTab';

export class Tab extends React.Component<TabProps> {
  private plainTab: PlainTab | null;

  public show(index: number) {
    if (this.plainTab) {
      this.plainTab.show(index);
    }
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <>
        <PlainTab ref={(el: PlainTab) => (this.plainTab = el)} {...rest}>
          {children}
        </PlainTab>
        <ul className="uk-switcher">
          {React.Children.map(children, (child) => (
            <li>{child?.['props']?.['children']}</li>
          ))}
        </ul>
      </>
    );
  }
}
