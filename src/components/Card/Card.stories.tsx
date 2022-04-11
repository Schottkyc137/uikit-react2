import React from 'react';
import { Card } from './Card';
import { CardTitle } from './CardTitle';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { Button } from '../Button';
import { CardMedia } from './CardMedia';
import { Label } from '../Label';
import { CardBadge } from './CardBadge';

export default {
  title: 'Card',
  component: Card,
};

export const Basic = () => (
  <Card body style={{ width: '350px' }}>
    <CardTitle>Default</CardTitle>
    <p>
      Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </Card>
);

export const StyleModifiers = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <Card body style={{ width: '350px' }}>
      <CardTitle>Default</CardTitle>
      <p>
        Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Card>
    <Card body style={{ width: '350px' }} styleModifier="secondary">
      <CardTitle>Secondary</CardTitle>
      <p>
        Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Card>
    <Card body style={{ width: '350px' }} styleModifier="primary">
      <CardTitle>Primary</CardTitle>
      <p>
        Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Card>
  </div>
);

export const Hover = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <Card body hover style={{ width: '350px' }}>
      <CardTitle>Default</CardTitle>
      <p>
        Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Card>
    <Card body hover style={{ width: '350px' }} styleModifier="secondary">
      <CardTitle>Secondary</CardTitle>
      <p>
        Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Card>
    <Card body hover style={{ width: '350px' }} styleModifier="primary">
      <CardTitle>Primary</CardTitle>
      <p>
        Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Card>
  </div>
);

export const DifferentSizes = () => (
  <div className="uk-child-width-1-2@s" data-uk-grid>
    <div>
      <Card sizeModifier="small" body>
        <CardTitle>Small</CardTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Card>
    </div>
    <div>
      <Card sizeModifier="large" body>
        <CardTitle>Large</CardTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Card>
    </div>
  </div>
);

export const HeaderFooter = () => (
  <Card style={{ width: '350px' }}>
    <CardHeader>
      <div className="uk-grid-small uk-flex-middle" data-uk-grid>
        <div className="uk-width-auto">
          <img
            className="uk-border-circle"
            width="40"
            height="40"
            src="images/avatar.jpg"
          />
        </div>
        <div className="uk-width-expand">
          <CardTitle className="uk-margin-remove-bottom">Title</CardTitle>
          <p className="uk-text-meta uk-margin-remove-top">
            <time dateTime="2016-04-01T19:00">April 01, 2016</time>
          </p>
        </div>
      </div>
    </CardHeader>
    <CardBody>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </CardBody>
    <CardFooter>
      <Button look="text">Read more</Button>
    </CardFooter>
  </Card>
);

export const Media = () => (
  <div className="uk-child-width-1-2@m" data-uk-grid>
    <Card>
      <CardMedia position="top">
        <img src="images/light.jpg" width="1800" height="1200" alt="" />
      </CardMedia>
      <CardBody>
        <CardTitle>Media Top</CardTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>Media Bottom</CardTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </CardBody>
      <CardMedia position="bottom">
        <img src="images/light.jpg" width="1800" height="1200" alt="" />
      </CardMedia>
    </Card>
  </div>
);

export const Badge = () => (
  <Card body style={{ width: '350px' }}>
    <CardBadge>
      <Label>Badge</Label>
    </CardBadge>
    <CardTitle>Title</CardTitle>
    <p>
      Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </Card>
);
