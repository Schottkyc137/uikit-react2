import UIkit from 'uikit';
import React from 'react';
import { ScrollOptions } from './ScrollProps';

export function scrollTo(
  element: React.MutableRefObject<HTMLElement | null>,
  options?: ScrollOptions,
  source?: React.MutableRefObject<HTMLElement | null>,
  callback?: () => void
) {
  if (element.current != null) {
    if (source?.current != null && callback != null) {
      // @ts-ignore
      UIkit.util.on(source.current, 'scrolled', callback);
      return UIkit.scroll(source.current, options).scrollTo(element.current);
    } else {
      return UIkit.scroll(element.current, options).scrollTo(element.current);
    }
  }
}
