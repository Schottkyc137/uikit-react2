/**
 * Use typescript constants to describe a UIkit animation
 * <pre>{@code
 *    <div className={animation.slide.medium.bottom}}>...</div>
 * }</pre>
 */
export namespace animation {
  const prefix = 'uk-animation-';
  const slidePrefix = prefix + 'slide-';

  const smallSlideAnimation = {
    top: slidePrefix + 'top-small',
    bottom: slidePrefix + 'bottom-small',
    left: slidePrefix + 'left-small',
    right: slidePrefix + 'right-small',
  };

  const mediumSlideAnimation = {
    top: slidePrefix + 'top-medium',
    bottom: slidePrefix + 'bottom-medium',
    left: slidePrefix + 'left-medium',
    right: slidePrefix + 'right-medium',
  };

  const slideAnimation = {
    top: slidePrefix + 'top',
    bottom: slidePrefix + 'bottom',
    left: slidePrefix + 'left',
    right: slidePrefix + 'right',
    small: smallSlideAnimation,
    medium: mediumSlideAnimation,
  };

  const scaleAnimation = {
    up: prefix + 'scale-up',
    down: prefix + 'scale-down',
  };

  export const fade = prefix + 'fade';
  export const scale = scaleAnimation;
  export const shake = prefix + 'shake';
  export const stroke = prefix + 'stroke';
  export const slide = slideAnimation;

  export const reversed: string = prefix + 'reverse';

  export const fast: string = prefix + 'fast';

  export const kenburns: string = prefix + 'kenburns';

  const originPrefix = 'uk-transform-origin-';

  export const origin = {
    topLeft: originPrefix + 'top-left',
    topCenter: originPrefix + 'top-center',
    topRight: originPrefix + 'top-right',
    centerLeft: originPrefix + 'center-left',
    centerRight: originPrefix + 'center-right',
    bottomLeft: originPrefix + 'bottom-left',
    bottomCenter: originPrefix + 'bottom-center',
    bottomRight: originPrefix + 'bottom-right',
  };

  /**
   * Reverses an animation
   */
  export function reverse(animation: string) {
    return animation + ' ' + reversed;
  }

  /**
   * makes an animation go faster
   * @param animation
   */
  export function faster(animation: string) {
    return animation + ' ' + fast;
  }

  /**
   * Changes the origin of an animation to the specified value
   */
  export function changeOrigin(animation: string, to: keyof typeof origin) {
    return animation + ' ' + origin[to];
  }
}
