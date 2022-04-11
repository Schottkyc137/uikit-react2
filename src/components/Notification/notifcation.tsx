import { ReactElement } from 'react';
import { Notification, NotificationOptions } from './Notification';
import UIkit from 'uikit';
import { renderToStaticMarkup } from 'react-dom/server';

export function addNotification(
  message: String | ReactElement,
  options?: NotificationOptions
): Notification {
  let resolvedOptions: UIkit.UIkitNotificationOptions = {
    pos: options?.pos,
    status: options?.status,
    timeout: options?.timeout,
    group: options?.group,
  };
  if (typeof message === 'string') {
    resolvedOptions.message = message;
  } else {
    resolvedOptions.message = renderToStaticMarkup(message as ReactElement);
  }
  return UIkit.notification(resolvedOptions);
}

export function closeAllNotifications(): void {
  //@ts-ignore
  UIkit.notification.closeAll();
}
