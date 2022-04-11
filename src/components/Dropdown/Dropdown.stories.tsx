import React from 'react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button';
import { DropdownNav } from './DropdownNav';
import { NavDivider, NavItem } from '../Nav';
import { NavHeader } from '../Nav';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const Basic = () => (
  <>
    <div className="uk-inline">
      <Button>Hover</Button>
      <Dropdown>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Dropdown>
    </div>

    <div className="uk-inline">
      <Button>Click</Button>
      <Dropdown mode="click">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Dropdown>
    </div>
  </>
);

export const Nav = () => (
  <>
    <Button>Hover</Button>
    <Dropdown className="uk-width-large">
      <DropdownNav>
        <NavItem active>Active</NavItem>
        <NavItem>Item</NavItem>
        <NavHeader>Header</NavHeader>
        <NavItem>Item</NavItem>
        <NavItem>Item</NavItem>
        <NavDivider />
        <NavItem>Item</NavItem>
      </DropdownNav>
    </Dropdown>
  </>
);

export const Grid = () => (
  <>
    <Button>Hover</Button>
    <Dropdown className="uk-width-large">
      <div className="uk-dropdown-grid uk-child-width-1-2@m" data-uk-grid>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
      </div>
    </Dropdown>
  </>
);

export const Position = () => (
  <>
    <div className="uk-inline">
      <Button>Top Right</Button>
      <Dropdown pos="top-right">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Dropdown>
    </div>

    <div className="uk-inline">
      <Button>Bottom Justify</Button>
      <Dropdown pos="bottom-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Dropdown>
    </div>

    <div className="uk-inline">
      <Button>Right Center</Button>
      <Dropdown pos="right-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Dropdown>
    </div>
  </>
);

export const Boundary = () => (
  <div className="boundary uk-panel uk-placeholder uk-width-2-3@s">
    <Button className="uk-float-left">Hover</Button>
    <Dropdown boundary=".boundary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </Dropdown>

    <Button className="uk-float-right">Hover</Button>
    <Dropdown boundary=".boundary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </Dropdown>
  </div>
);

export const BoundaryAlignment = () => (
  <div className="boundary-align uk-panel uk-placeholder">
    <Button className="uk-float-left">Justify</Button>
    <Dropdown pos="bottom-justify" boundary=".boundary-align" boundaryAlign>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </Dropdown>

    <Button className="uk-float-right">Center</Button>
    <Dropdown pos="bottom-center" boundary=".boundary-align" boundaryAlign>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </Dropdown>
  </div>
);
