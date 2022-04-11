import React from 'react';
import { PropsWithChildren } from 'react';

/**
 * A subtitle to show inside a `NavItem` component.
 * This should be combined with a `div` element for correct alignment
 *
 * @example
 * <pre>{@code
 *   <NavItem>
 *     <div>
 *       Title<NavSubtitle>Subtitle</NavSubtitle>
 *     </div>
 *   </NavItem>
 * }</pre>
 * @param props
 * @constructor
 */
export function NavSubtitle(props: PropsWithChildren<{}>) {
  return <div className="uk-navbar-subtitle">{props.children}</div>;
}
