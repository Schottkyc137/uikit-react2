import React from 'react';
import { List } from './List';
export default {
  title: 'List',
  component: List,
};

export const Basic = () => (
  <List>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </List>
);

export const Markers = () => (
  <div style={{ display: 'flex', gap: '30px' }}>
    <div>
      <h4>Disc</h4>
      <List marker="disc">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </List>
    </div>

    <div>
      <h4>Circle</h4>
      <List marker="circle">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </List>
    </div>

    <div>
      <h4>Square</h4>
      <List marker="square">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </List>
    </div>

    <div>
      <h4>Decimal</h4>
      <List marker="decimal">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </List>
    </div>

    <div>
      <h4>Hyphen</h4>
      <List marker="hyphen">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </List>
    </div>
  </div>
);

export const Colors = () => (
  <div style={{ display: 'flex', gap: '30px' }}>
    <div>
      <h4>Muted</h4>
      <List colorModifier="muted" marker="disc">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </List>
    </div>

    <div>
      <h4>Emphasis</h4>
      <List colorModifier="emphasis" marker="disc">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </List>
    </div>

    <div>
      <h4>Primary</h4>
      <List colorModifier="primary" marker="disc">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </List>
    </div>

    <div>
      <h4>Secondary</h4>
      <List colorModifier="secondary" marker="disc">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </List>
    </div>
  </div>
);

export const Divider = () => (
  <List divider>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </List>
);

export const Striped = () => (
  <List striped>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </List>
);

export const SizeModifiers = () => (
  <>
    <h4>Large</h4>
    <div style={{ display: 'flex', gap: '30px' }}>
      <div>
        <List sizeModifier="large">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </List>
      </div>

      <div>
        <List sizeModifier="large" marker="disc">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </List>
      </div>

      <div>
        <List sizeModifier="large" divider>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </List>
      </div>

      <div>
        <List sizeModifier="large" striped>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </List>
      </div>
    </div>
    <h4>Collapse</h4>
    <div style={{ display: 'flex', gap: '30px' }}>
      <div>
        <List sizeModifier="collapse">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </List>
      </div>

      <div>
        <List sizeModifier="collapse" marker="disc">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </List>
      </div>

      <div>
        <List sizeModifier="collapse" divider>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </List>
      </div>

      <div>
        <List sizeModifier="collapse" striped>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </List>
      </div>
    </div>
  </>
);
