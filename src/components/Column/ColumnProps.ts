import { HTMLProps } from 'react';

export interface ColumnProps extends HTMLProps<HTMLDivElement> {
  /**
   * How many columns to show. This is either a static number or an object
   * describing how many columns are shown at which device width.
   *
   * @example
   * Show two columns for small devices ('s'),
   * three columns for medium devices ('m')
   * and four columns for large devices ('l')
   * <pre>{@code
   *  <Columns count={{ s: 2, m: 3, l: 4 }}>...</Columns>
   * }</pre>
   */
  count: number | ResponsiveColumn[];

  divider?: boolean;
}

export type ResponsiveColumn = `${number}@${'s' | 'm' | 'l' | 'xl'}`;
