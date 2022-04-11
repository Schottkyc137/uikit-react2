import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Crumb } from './Crumb';
import { PlainCrumb } from './PlainCrumb';

export default {
  title: 'Breadcrumb',
  component: Breadcrumbs,
};

export const Basic = () => (
  <Breadcrumbs>
    <Crumb>Home</Crumb>
    <Crumb>Linked Category</Crumb>
    <Crumb disabled>Disabled Category</Crumb>
    <PlainCrumb>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </PlainCrumb>
  </Breadcrumbs>
);
