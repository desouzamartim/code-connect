export interface InputProps {
  id: string;
  type?: string;
  placeholder?: string;
  name?: string;
  autocomplete?: AutoFill;
}

export function createInput({
  id,
  type = 'text',
  placeholder = '',
  name,
  autocomplete,
}: InputProps): HTMLInputElement {
  const el = document.createElement('input');
  el.id = id;
  el.type = type;
  el.placeholder = placeholder;
  el.className = 'input';
  if (name) el.name = name;
  if (autocomplete) el.autocomplete = autocomplete;
  return el;
}
