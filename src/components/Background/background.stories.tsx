import React from 'react';
import { extendClasses } from '../util/class-names';
import { background } from './background';

export default {
  title: 'Background',
};

function BackgroundShowcase({
  className,
  title,
}: {
  className: string;
  title: string;
}) {
  return (
    <div>
      <div className={extendClasses(className, 'uk-padding uk-panel')}>
        <p className="uk-h4">{title}</p>
      </div>
    </div>
  );
}

export const Basic = () => (
  <div className="uk-child-width-1-2@s uk-text-center" data-uk-grid>
    <BackgroundShowcase className={background.standard} title="Default" />
    <BackgroundShowcase className={background.muted} title="Muted" />
    <BackgroundShowcase
      className={background.primary + ' uk-light'}
      title="Primary"
    />
    <BackgroundShowcase
      className={background.secondary + ' uk-light'}
      title="Secondary"
    />
  </div>
);

function BlendModeImage({ className }: { className: string }) {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(../../../storybook-assets/photo.jpg)` }}
        className={extendClasses(
          className,
          'uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle'
        )}
      >
        <p className="uk-h4">Multiply</p>
      </div>
    </div>
  );
}

export const BlendModes = () => (
  <div
    className="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-small uk-light"
    uk-grid
  >
    <BlendModeImage
      className={[
        background.blend.multiply,
        background.primary,
        background.cover,
      ].join(' ')}
    />
  </div>
);
