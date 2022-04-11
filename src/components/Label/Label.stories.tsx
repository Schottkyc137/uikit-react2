import React from 'react';
import { Label } from './Label';

export default {
  title: 'Label',
  component: Label,
};

export const Basic = () => (
  <div style={{ display: 'flex', gap: '12px' }}>
    <Label>Default</Label>
    <Label look="success">Success</Label>
    <Label look="danger">Danger</Label>
    <Label look="warning">Warning</Label>
  </div>
);
