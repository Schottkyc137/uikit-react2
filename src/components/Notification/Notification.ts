export interface Notification {
  close(immediate: boolean): void;
}

export interface NotificationOptions {
  /**
   * Notification status color.
   */
  status?: 'primary' | 'success' | 'warning' | 'danger';
  /**
   * Visibility duration until a notification disappears.
   */
  timeout?: number;
  /**
   * Display corner.
   */
  pos?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  /**
   * Useful, if you want to close all notifications in a specific group.
   *
   * @default null
   */
  group?: string;
}
