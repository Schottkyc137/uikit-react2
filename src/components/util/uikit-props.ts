import { kebabCase } from 'lodash';

export function propsToUikitOptions(props: object) {
  return Object.entries(props)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => kebabCase(key) + ':' + propValueToString(value))
    .join('; ');
}

function propValueToString(value: any): string {
  if (Array.isArray(value)) {
    return value.join(' ');
  } else {
    return String(value);
  }
}

export function toKebapCase(options?: object): object | undefined {
  return options
    ? Object.fromEntries(
        Object.entries(options).map(([key, value]) => [kebabCase(key), value])
      )
    : undefined;
}
