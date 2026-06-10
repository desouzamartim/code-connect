export interface ButtonProps {
  label: string;
  type?: HTMLButtonElement['type'];
  fullWidth?: boolean;
  onClick?: () => void;
}

export function createButton({
  label,
  type = 'button',
  fullWidth = false,
  onClick,
}: ButtonProps): HTMLButtonElement {
  const el = document.createElement('button');
  el.type = type;
  el.className = fullWidth ? 'btn btn--primary btn--full' : 'btn btn--primary';
  el.textContent = label;
  if (onClick) el.addEventListener('click', onClick);
  return el;
}
