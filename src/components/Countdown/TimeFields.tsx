import React from 'react';
import { TimeFieldProps } from './CountdownProps';

export function Days(props: TimeFieldProps) {
  return <_genericTime field="days" {...props} />;
}

export function Hours(props: TimeFieldProps) {
  return <_genericTime field="hours" {...props} />;
}

export function Minutes(props: TimeFieldProps) {
  return <_genericTime field="minutes" {...props} />;
}

export function Seconds(props: TimeFieldProps) {
  return <_genericTime field="seconds" {...props} />;
}

function _genericTime({
  label,
  separator,
  field,
}: TimeFieldProps & { field: string }) {
  if (label && separator) {
    return (
      <>
        <div>
          <div className={`uk-countdown-number uk-countdown-${field}`} />
          <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
            {label}
          </div>
        </div>
        <div className="uk-countdown-separator">{separator}</div>
      </>
    );
  } else if (label && !separator) {
    return (
      <div>
        <div className={`uk-countdown-number uk-countdown-${field}`} />
        <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
          {label}
        </div>
      </div>
    );
  } else if (!label && separator) {
    return (
      <>
        <div className={`uk-countdown-number uk-countdown-${field}`} />
        <div className="uk-countdown-separator">{separator}</div>
      </>
    );
  } else {
    return <div className={`uk-countdown-number uk-countdown-${field}`} />;
  }
}
