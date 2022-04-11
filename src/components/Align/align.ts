export type AlignDirection = 'left' | 'right' | 'center';
export type ResponsiveClass = 's' | 'm' | 'l' | 'xl';
export type ResponsiveAlignment = `${AlignDirection}@${ResponsiveClass}`;

/**
 * Allows strict typing of `uk-align-*` classes.
 * For example, to create a left-aligned element, use
 * <pre>
 *   align('left')
 * </pre>
 * To align an element right for screens of size `m` (960px and higher), but
 * align it in the center for screens smaller than that, use
 * <pre>
 *   align('center', 'right@m')
 * </pre>
 * @param values
 */
export function align(
  ...values: (AlignDirection | ResponsiveAlignment)[]
): string {
  return values.map((val) => `uk-align-${val}`).join(' ');
}
