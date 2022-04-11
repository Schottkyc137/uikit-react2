import React from 'react';
import { Tab } from './Tab';
import { TabItem } from './TabItem';

export default {
  title: 'Tab',
  component: Tab,
};

export const Basic = () => (
  <Tab>
    <TabItem active title={<a href="#">Left</a>} />
    <TabItem title={<a href="#">Item</a>} />
    <TabItem title={<a href="#">Item</a>} />
    <TabItem disabled title={<a>Disabled</a>} />
  </Tab>
);

export const Bottom = () => (
  <Tab bottom>
    <TabItem active title={<a href="#">Bottom</a>} />
    <TabItem title={<a href="#">Item</a>} />
    <TabItem title={<a href="#">Item</a>} />
  </Tab>
);

export const LeftRight = () => (
  <>
    <Tab left>
      <TabItem active title={<a href="#">Left</a>} />
      <TabItem title={<a href="#">Item</a>} />
      <TabItem title={<a href="#">Item</a>} />
    </Tab>
    <Tab right>
      <TabItem active title={<a href="#">Right</a>} />
      <TabItem title={<a href="#">Item</a>} />
      <TabItem title={<a href="#">Item</a>} />
    </Tab>
  </>
);

export const SwitcherAndTab = () => (
  <Tab>
    <TabItem title={<a href="#">Item</a>}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </TabItem>
    <TabItem title={<a href="#">Item</a>}>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </TabItem>
    <TabItem title={<a href="#">Item</a>}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur, sed do eiusmod.
    </TabItem>
  </Tab>
);
