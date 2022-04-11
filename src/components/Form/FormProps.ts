import { HTMLProps, ReactElement } from 'react';

export interface FormProps extends HTMLProps<HTMLFormElement> {
  /**
   * - stacked: display labels on top of controls.
   * - horizontal: display labels and controls side by side.
   */
  layout?: 'stacked' | 'horizontal';
}

export interface CommonFormProps {
  state?: 'danger' | 'success';

  sizeModifier?: 'large' | 'small';

  widthModifier?: 'large' | 'medium' | 'small' | 'xsmall';

  blank?: boolean;

  id?: string;
}

export interface FormControlProps {
  label: string;
  control: ReactElement<CommonFormProps>;
}

export interface FieldSetProps extends HTMLProps<HTMLFieldSetElement> {
  /**
   * This is an alternative way to add a legend to this field-set.
   * The 'normal' way is a `<Legend>` tag inside this field-tag
   */
  legend?: string;
}
