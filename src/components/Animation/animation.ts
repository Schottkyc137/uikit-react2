/**
 * Use typescript constants to describe a UIkit animation
 * <pre>{@code
 *    <div className={animation.slide.medium.bottom}}>...</div>
 * }</pre>
 */
export namespace animation {
  const smallSlideAnimation = {
    top: 'uk-animation-slide-top-small',
    bottom: 'uk-animation-slide-bottom-small',
    left: 'uk-animation-slide-left-small',
    right: 'uk-animation-slide-right-small',
  };

  const mediumSlideAnimation = {
    top: 'uk-animation-slide-top-medium',
    bottom: 'uk-animation-slide-bottom-medium',
    left: 'uk-animation-slide-left-medium',
    right: 'uk-animation-slide-right-medium',
  };

  const slideAnimation = {
    top: 'uk-animation-slide-top',
    bottom: 'uk-animation-slide-bottom',
    left: 'uk-animation-slide-left',
    right: 'uk-animation-slide-right',
    small: smallSlideAnimation,
    medium: mediumSlideAnimation,
  };

  const scaleAnimation = {
    up: 'uk-animation-scale-up',
    down: 'uk-animation-scale-down',
  };

  export const fade = 'uk-animation-fade';
  export const scale = scaleAnimation;
  export const shake = 'uk-animation-shake';
  export const stroke = 'uk-animation-stroke';
  export const slide = slideAnimation;

  export const reversed: string = 'uk-animation-reverse';

  export const fast: string = 'uk-animation-fast';

  export const kenburns: string = 'uk-animation-kenburns';

  export const origin = {
    topLeft: 'uk-transform-origin-top-left',
    topCenter: 'uk-transform-origin-top-center',
    topRight: 'uk-transform-origin-top-right',
    centerLeft: 'uk-transform-origin-center-left',
    centerRight: 'uk-transform-origin-center-right',
    bottomLeft: 'uk-transform-origin-bottom-left',
    bottomCenter: 'uk-transform-origin-bottom-center',
    bottomRight: 'uk-transform-origin-bottom-right',
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
