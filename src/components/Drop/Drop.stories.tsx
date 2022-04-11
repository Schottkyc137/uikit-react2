import React from 'react';
import { Drop } from './Drop';
import { Card } from '../Card';
import { Button } from '../Button';
export default {
  title: 'Drop',
  component: Drop,
};

export const Basic = () => (
  <>
    <div className="uk-inline">
      <Button>Hover</Button>
      <Drop>
        <Card body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Card>
      </Drop>
    </div>

    <div className="uk-inline">
      <Button>Click</Button>
      <Drop mode="click">
        <Card body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Card>
      </Drop>
    </div>
  </>
);

export const Grid = () => (
  <>
    <Button>Hover</Button>
    <Drop className="uk-width-large">
      <Card body>
        <div className="uk-drop-grid uk-child-width-1-2@m" data-uk-grid>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
        </div>
      </Card>
    </Drop>
  </>
);

export const Position = () => (
  <>
    <div className="uk-inline">
      <Button>Top Right</Button>
      <Drop pos="top-right">
        <Card body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Card>
      </Drop>
    </div>

    <div className="uk-inline">
      <Button>Bottom Justify</Button>
      <Drop pos="bottom-justify">
        <Card body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Card>
      </Drop>
    </div>

    <div className="uk-inline">
      <Button>Right Center</Button>
      <Drop pos="right-center">
        <Card body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Card>
      </Drop>
    </div>
  </>
);

export const Boundary = () => (
  <div className="boundary uk-panel uk-placeholder uk-width-2-3@s">
    <Button className="uk-float-left">Hover</Button>
    <Drop boundary=".boundary">
      <Card body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Card>
    </Drop>

    <Button className="uk-float-right">Hover</Button>
    <Drop boundary=".boundary">
      <Card body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Card>
    </Drop>
  </div>
);

export const BoundaryAlignment = () => (
  <div className="boundary-align uk-panel uk-placeholder">
    <Button className="uk-float-left">Justify</Button>
    <Drop pos="bottom-justify" boundary=".boundary-align" boundaryAlign>
      <Card body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Card>
    </Drop>

    <Button className="uk-float-right">Center</Button>
    <Drop pos="bottom-center" boundary=".boundary-align" boundaryAlign>
      <Card body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Card>
    </Drop>
  </div>
);

export const Offset = () => (
  <>
    <Button>Hover</Button>
    <Drop offset={80}>
      <Card body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Card>
    </Drop>
  </>
);
