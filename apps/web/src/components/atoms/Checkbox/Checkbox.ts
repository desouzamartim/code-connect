export interface CheckboxProps {
  id: string;
  label: string;
  name?: string;
  defaultChecked?: boolean;
}

export function createCheckbox({
  id,
  label,
  name,
  defaultChecked = false,
}: CheckboxProps): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'checkbox-wrapper';

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = id;
  input.className = 'checkbox-wrapper__input';
  if (name) input.name = name;
  input.checked = defaultChecked;

  const lbl = document.createElement('label');
  lbl.htmlFor = id;
  lbl.className = 'checkbox-wrapper__label';
  lbl.textContent = label;

  wrapper.appendChild(input);
  wrapper.appendChild(lbl);
  return wrapper;
}
