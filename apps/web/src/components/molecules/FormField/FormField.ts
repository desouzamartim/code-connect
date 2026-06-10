import { createInput } from '../../atoms/Input/Input';
import type { InputProps } from '../../atoms/Input/Input';

export interface FormFieldProps extends InputProps {
  label: string;
}

export function createFormField({ label, ...inputProps }: FormFieldProps): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'form-field';

  const lbl = document.createElement('label');
  lbl.htmlFor = inputProps.id;
  lbl.className = 'form-field__label';
  lbl.textContent = label;

  const input = createInput(inputProps);

  wrapper.appendChild(lbl);
  wrapper.appendChild(input);
  return wrapper;
}
