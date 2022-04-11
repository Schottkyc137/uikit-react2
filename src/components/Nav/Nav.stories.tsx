import React from 'react';
import { Nav } from './Nav';
import { NavItem } from './NavItem';
import { SubNav } from './SubNav';
import { NavHeader } from './NavHeader';
import { NavDivider } from './NavDivider';
import { Icon } from '../Icon';

export default {
  title: 'Nav',
  component: Nav,
};

export const Basic = () => (
  <Nav look="default">
    <NavItem active>Active</NavItem>
    <NavItem>Item 1</NavItem>
    <NavItem>Item 2</NavItem>
  </Nav>
);

export const NestedNavs = () => (
  <Nav look="default">
    <NavItem active>Level 0</NavItem>
    <SubNav title="Parent 0">
      <NavItem>Level 1</NavItem>
      <SubNav title="Parent 1">
        <NavItem>Level 2</NavItem>
        <NavItem>Level 2</NavItem>
      </SubNav>
    </SubNav>
  </Nav>
);

export const AccordionNav = () => (
  <Nav look="default" accordion>
    <NavItem active>Level 0</NavItem>
    <SubNav title="Parent 0">
      <NavItem>Level 1</NavItem>
      <SubNav title="Parent 1">
        <NavItem>Level 2</NavItem>
        <NavItem>Level 2</NavItem>
      </SubNav>
    </SubNav>
    <SubNav title="Parent 0">
      <SubNav title="Parent 1">
        <NavItem>Level 1</NavItem>
        <NavItem>Level 1</NavItem>
      </SubNav>
    </SubNav>
  </Nav>
);

export const AccordionNavMultiple = () => (
  <Nav look="default" accordion={{ multiple: true }}>
    <NavItem active>Level 0</NavItem>
    <SubNav title="Parent 0">
      <NavItem>Level 1</NavItem>
      <SubNav title="Parent 1">
        <NavItem>Level 2</NavItem>
        <NavItem>Level 2</NavItem>
      </SubNav>
    </SubNav>
    <SubNav title="Parent 0">
      <SubNav title="Parent 1">
        <NavItem>Level 1</NavItem>
        <NavItem>Level 1</NavItem>
      </SubNav>
    </SubNav>
  </Nav>
);

export const HeaderAndDivider = () => (
  <Nav look="default">
    <NavHeader>Header</NavHeader>
    <NavItem>Item A</NavItem>
    <NavItem>Item B</NavItem>
    <NavDivider />
    <NavItem>Item C</NavItem>
  </Nav>
);

export const ComplexNav = () => (
  <Nav look="default" accordion>
    <NavItem active>Active</NavItem>
    <SubNav title="Parent">
      <NavItem>Sub item</NavItem>
      <NavItem>Sub item</NavItem>
    </SubNav>
    <SubNav title="Parent">
      <NavItem>Sub item</NavItem>
      <NavItem>Sub item</NavItem>
    </SubNav>
    <NavHeader>Header</NavHeader>
    <NavItem>
      <Icon icon="table" className="uk-margin-small-right" /> Item
    </NavItem>
    <NavItem>
      <Icon icon="thumbnails" className="uk-margin-small-right" />
      Item
    </NavItem>
    <NavDivider />
    <NavItem>
      <Icon icon="trash" className="uk-margin-small-right" /> Item
    </NavItem>
  </Nav>
);
