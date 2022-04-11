import { IconNav } from './IconNav';
import React from 'react';
import { IconLink } from '../Icon/IconLink';
import { Icon } from '../Icon';

export default {
  title: 'IconNav',
  component: IconNav,
};

export const Basic = () => (
  <IconNav>
    <IconLink icon="plus" />
    <IconLink icon="file-edit" />
    <IconLink icon="copy" />
    <a>
      <Icon icon="bag" />
      (2)
    </a>
  </IconNav>
);

export const Vertical = () => (
  <IconNav alignment="vertical">
    <IconLink icon="plus" />
    <IconLink icon="file-edit" />
    <IconLink icon="copy" />
    <a>
      <Icon icon="bag" />
      (2)
    </a>
  </IconNav>
);
