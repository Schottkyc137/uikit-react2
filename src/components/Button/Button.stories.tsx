import React from 'react';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Button',
  component: Button,
};

export const Basic = () => (
  <p style={{ display: 'flex', gap: '12px' }}>
    <Button>Button</Button>
    <Button disabled>Disabled</Button>
  </p>
);

export const Styles = () => (
  <p style={{ display: 'flex', gap: '12px' }}>
    <Button look="default">Default</Button>
    <Button look="primary">Primary</Button>
    <Button look="secondary">Secondary</Button>
    <Button look="danger">Danger</Button>
    <Button look="text">Text</Button>
    <Button look="link">Link</Button>
  </p>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
    <p style={{ display: 'flex', gap: '12px' }}>
      <Button look="default" size="small">
        Small Button
      </Button>
      <Button look="primary" size="small">
        Small Button
      </Button>
      <Button look="secondary" size="small">
        Small Button
      </Button>
    </p>
    <p style={{ display: 'flex', gap: '12px' }}>
      <Button look="default">Regular Button</Button>
      <Button look="primary">Regular Button</Button>
      <Button look="secondary">Regular Button</Button>
    </p>
    <p style={{ display: 'flex', gap: '12px' }}>
      <Button look="default" size="large">
        Large Button
      </Button>
      <Button look="primary" size="large">
        Large Button
      </Button>
      <Button look="secondary" size="large">
        Large Button
      </Button>
    </p>
  </div>
);

export const Group = () => (
  <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
    <ButtonGroup>
      <Button look="default">Default</Button>
      <Button look="default">Default</Button>
      <Button look="default">Default</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button look="primary">Primary</Button>
      <Button look="primary">Primary</Button>
    </ButtonGroup>
  </div>
);
