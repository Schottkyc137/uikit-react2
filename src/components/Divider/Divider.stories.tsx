import React from 'react';
import { Divider } from './Divider';
export default {
  title: 'Divider',
  component: Divider,
};

export const Basic = () => <Divider />;

export const Icon = () => <Divider icon />;

export const Small = () => <Divider small />;

export const vertical = () => <Divider vertical />;
