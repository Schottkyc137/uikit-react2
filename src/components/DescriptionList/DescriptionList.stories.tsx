import React from 'react';
import { DescriptionList } from './DescriptionList';
export default {
  title: 'DescriptionList',
  component: DescriptionList,
};

export const Basic = () => (
  <DescriptionList>
    <dt>Description term</dt>
    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
    <dt>Description term</dt>
    <dd>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </dd>
    <dt>Description term</dt>
    <dd>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </dd>
  </DescriptionList>
);

export const Divier = () => (
  <DescriptionList divider>
    <dt>Description term</dt>
    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
    <dt>Description term</dt>
    <dd>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </dd>
    <dt>Description term</dt>
    <dd>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </dd>
  </DescriptionList>
);
