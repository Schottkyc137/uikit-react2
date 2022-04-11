/**
 * Use typescript constants to describe classes for a background
 * @example
 * <pre>{@code
 * <div className={background.standard}}></div>
 * }</pre>
 */
export namespace background {
  const prefix = 'uk-background-';

  export const standard = prefix + 'default';
  export const muted = prefix + 'muted';
  export const primary = prefix + 'primary';
  export const secondary = prefix + 'secondary';

  export const cover = prefix + 'cover';
  export const fitToContainer = prefix + 'contain';
  export const fullWidth = prefix + 'width-1-1';
  export const fullHeight = prefix + 'height-1-1';

  export const noRepeat = prefix + 'norepeat';

  export const fixed = prefix + 'fixed';

  export function imageAt(viewport: 's' | 'm' | 'l' | 'xl') {
    return `uk-background-image@${viewport}`;
  }

  export const position = {
    topLeft: prefix + 'top-left',
    topCenter: prefix + 'top-center',
    topRight: prefix + 'top-right',
    centerLeft: prefix + 'center-left',
    centerRight: prefix + 'center-right',
    bottomLeft: prefix + 'bottom-left',
    bottomCenter: prefix + 'bottom-center',
    bottomRight: prefix + 'bottom-right',
  };

  const blendPrefix = prefix + 'blend-';

  export const blend = {
    multiply: blendPrefix + 'multiply',
    screen: blendPrefix + 'screen',
    overlay: blendPrefix + 'overlay',
    darken: blendPrefix + 'darken',
    lighten: blendPrefix + 'lighten',
    colorDodge: blendPrefix + 'color-dodge',
    colorBurn: blendPrefix + 'color-burn',
    hardLight: blendPrefix + 'hard-light',
    softLight: blendPrefix + 'soft-light',
    difference: blendPrefix + 'difference',
    exclusion: blendPrefix + 'exclusion',
    hue: blendPrefix + 'hue',
    saturation: blendPrefix + 'saturation',
    color: blendPrefix + 'color',
    luminosity: blendPrefix + 'luminosity',
  };
}
