import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Badge',
  component: Badge,
};

export const Basic = () => (
  <>
    <Badge className="uk-margin-small-right">0</Badge>
    <Badge>100</Badge>
  </>
);
