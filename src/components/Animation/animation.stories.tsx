import React from 'react';
import { Card } from '../Card';
import { animation } from './animation';
import reverse = animation.reverse;
import faster = animation.faster;
import changeOrigin = animation.changeOrigin;

export default {
  title: 'animation',
};

function Center({ children }: { children?: string }) {
  return <p className="uk-text-center">{children}</p>;
}

function ShowAnimation({
  className,
  children,
}: {
  className: string;
  children?: string;
}) {
  return (
    <div className="uk-animation-toggle" tabIndex={0}>
      <Card body className={className}>
        <Center>{children}</Center>
      </Card>
    </div>
  );
}

export const Basic = () => (
  <div
    className="uk-child-width-1-2 uk-child-width-1-4@s uk-grid-match"
    data-uk-grid
  >
    <ShowAnimation className={animation.fade}>Fade</ShowAnimation>
    <ShowAnimation className={animation.scale.up}>Scale Up</ShowAnimation>
    <ShowAnimation className={animation.scale.down}>Scale Down</ShowAnimation>
    <ShowAnimation className={animation.shake}>Shake</ShowAnimation>
    <ShowAnimation className={animation.slide.top}>Top</ShowAnimation>
    <ShowAnimation className={animation.slide.bottom}>Bottom</ShowAnimation>
    <ShowAnimation className={animation.slide.left}>Left</ShowAnimation>
    <ShowAnimation className={animation.slide.right}>Right</ShowAnimation>
    <ShowAnimation className={animation.slide.small.top}>
      Top Small
    </ShowAnimation>
    <ShowAnimation className={animation.slide.small.bottom}>
      Bottom Small
    </ShowAnimation>
    <ShowAnimation className={animation.slide.small.left}>
      Left Small
    </ShowAnimation>
    <ShowAnimation className={animation.slide.small.right}>
      Right Small
    </ShowAnimation>
    <ShowAnimation className={animation.slide.medium.top}>
      Top Medium
    </ShowAnimation>
    <ShowAnimation className={animation.slide.medium.bottom}>
      Bottom Medium
    </ShowAnimation>
    <ShowAnimation className={animation.slide.medium.left}>
      Left Medium
    </ShowAnimation>
    <ShowAnimation className={animation.slide.medium.right}>
      Right Medium
    </ShowAnimation>
  </div>
);

export const Reversed = () => (
  <div
    className="uk-child-width-1-2 uk-child-width-1-4@s uk-grid-match"
    data-uk-grid
  >
    <ShowAnimation className={reverse(animation.fade)}>Fade</ShowAnimation>
    <ShowAnimation className={reverse(animation.scale.up)}>
      Scale Up
    </ShowAnimation>
    <ShowAnimation className={reverse(animation.scale.down)}>
      Scale Down
    </ShowAnimation>
    <ShowAnimation className={reverse(animation.shake)}>Shake</ShowAnimation>
    <ShowAnimation className={reverse(animation.slide.top)}>Top</ShowAnimation>
    <ShowAnimation className={reverse(animation.slide.bottom)}>
      Bottom
    </ShowAnimation>
    <ShowAnimation className={reverse(animation.slide.left)}>
      Left
    </ShowAnimation>
    <ShowAnimation className={reverse(animation.slide.right)}>
      Right
    </ShowAnimation>
    <ShowAnimation className={reverse(animation.slide.small.top)}>
      Top Small
    </ShowAnimation>
    <ShowAnimation className={reverse(animation.slide.small.bottom)}>
      Bottom Small
    </ShowAnimation>
    <ShowAnimation className={reverse(animation.slide.small.left)}>
      Left Small
    </ShowAnimation>
    <ShowAnimation className={reverse(animation.slide.small.right)}>
      Right Small
    </ShowAnimation>
    <ShowAnimation className={reverse(animation.slide.medium.top)}>
      Top Medium
    </ShowAnimation>
    <ShowAnimation className={reverse(animation.slide.medium.bottom)}>
      Bottom Medium
    </ShowAnimation>
    <ShowAnimation className={reverse(animation.slide.medium.left)}>
      Left Medium
    </ShowAnimation>
    <ShowAnimation className={reverse(animation.slide.medium.right)}>
      Right Medium
    </ShowAnimation>
  </div>
);

export const Fast = () => (
  <div className="uk-width-1-3@s">
    <ShowAnimation className={faster(animation.fade)}>Fade Fast</ShowAnimation>
  </div>
);

export const DifferentOrigin = () => (
  <div className="uk-child-width-1-3@s" data-uk-grid>
    <ShowAnimation className={changeOrigin(animation.scale.up, 'bottomRight')}>
      Bottom Right
    </ShowAnimation>
    <ShowAnimation className={changeOrigin(animation.scale.up, 'topCenter')}>
      Top Center
    </ShowAnimation>
    <ShowAnimation className={changeOrigin(animation.scale.up, 'bottomCenter')}>
      Bottom Center
    </ShowAnimation>
  </div>
);
