function _concatStrings(
  a: string | undefined,
  b: string | undefined
): string | undefined {
  if (a && b) {
    return a + ' ' + b;
  } else {
    return a || b;
  }
}

export function extendClasses(
  className: string | undefined,
  ...additionalClass: (string | undefined)[]
): string | undefined {
  if (additionalClass.length == 1) {
    return _concatStrings(className, additionalClass[0]);
  } else {
    return _concatStrings(
      className,
      additionalClass.filter((name) => !!name).join(' ') || undefined
    );
  }
}
