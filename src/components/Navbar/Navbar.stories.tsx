import React from 'react';
import { Navbar } from './Navbar';
import { Navigation } from './Navigation';
import { NavDivider, NavItem } from '../Nav';
import { NavbarDropdown } from './NavbarDropdown';
import { NavSubtitle } from './NavSubtitle';
import { NavbarToggle } from './NavbarToggle';
import { NavbarDropdownColumn } from './NavbarDropdownColumn';
import { NavHeader } from '../Nav';

export default {
  title: 'Navbar',
  component: Navbar,
};

export const Basic = () => (
  <Navbar container>
    <Navigation>
      <NavItem active>Active</NavItem>
      <NavbarDropdown dropdownTitle="Parent">
        <NavItem active>Active</NavItem>
        <NavItem>Item</NavItem>
        <NavItem>Item</NavItem>
      </NavbarDropdown>
      <NavItem>Item</NavItem>
    </Navigation>
  </Navbar>
);

export const MultipleNavigations = () => (
  <Navbar container>
    <Navigation alignment="left">
      <NavItem active>Active</NavItem>
      <NavbarDropdown dropdownTitle="Parent">
        <NavItem active>Active</NavItem>
        <NavItem>Item</NavItem>
        <NavItem>Item</NavItem>
      </NavbarDropdown>
      <NavItem>Item</NavItem>
    </Navigation>

    <Navigation alignment="right">
      <NavItem active>Active</NavItem>
      <NavbarDropdown dropdownTitle="Parent">
        <NavItem active>Active</NavItem>
        <NavItem>Item</NavItem>
        <NavItem>Item</NavItem>
      </NavbarDropdown>
      <NavItem>Item</NavItem>
    </Navigation>
  </Navbar>
);

export const ClickMode = () => (
  <Navbar container mode="click">
    <Navigation>
      <NavItem active>Active</NavItem>
      <NavbarDropdown dropdownTitle="Parent">
        <NavItem active>Active</NavItem>
        <NavItem>Item</NavItem>
        <NavItem>Item</NavItem>
      </NavbarDropdown>
      <NavItem>Item</NavItem>
    </Navigation>
  </Navbar>
);

export const NavWithSubtitle = () => (
  <Navbar container>
    <Navigation>
      <NavItem active>
        <div>
          Active<NavSubtitle>Subtitle</NavSubtitle>
        </div>
      </NavItem>
      <NavbarDropdown
        dropdownTitle={
          <div>
            Parent<NavSubtitle>Subtitle</NavSubtitle>
          </div>
        }
      >
        <NavItem active>Active</NavItem>
        <NavItem>Item</NavItem>
        <NavItem>Item</NavItem>
      </NavbarDropdown>
      <NavItem>
        <div>
          Item<NavSubtitle>Subtitle</NavSubtitle>
        </div>
      </NavItem>
    </Navigation>
  </Navbar>
);

export const MultipleColumns = () => (
  <Navbar container>
    <Navigation>
      <NavbarDropdown multiColumn dropdownTitle="Two Columns">
        <NavbarDropdownColumn>
          <NavItem active>Active</NavItem>
          <NavItem>Item</NavItem>
          <NavHeader>Header</NavHeader>
          <NavItem>Item</NavItem>
          <NavItem>Item</NavItem>
          <NavDivider />
          <NavItem>Item</NavItem>
        </NavbarDropdownColumn>
        <NavbarDropdownColumn>
          <NavItem active>Active</NavItem>
          <NavItem>Item</NavItem>
          <NavHeader>Header</NavHeader>
          <NavItem>Item</NavItem>
          <NavItem>Item</NavItem>
          <NavDivider />
          <NavItem>Item</NavItem>
        </NavbarDropdownColumn>
      </NavbarDropdown>
    </Navigation>
  </Navbar>
);

export const Toggle = () => (
  <Navbar container>
    <NavbarToggle>Menu</NavbarToggle>
  </Navbar>
);
