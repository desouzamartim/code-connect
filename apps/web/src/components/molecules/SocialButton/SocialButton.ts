export interface SocialButtonProps {
  label: string;
  iconSrc: string;
  iconAlt: string;
  onClick?: () => void;
}

export function createSocialButton({
  label,
  iconSrc,
  iconAlt,
  onClick,
}: SocialButtonProps): HTMLButtonElement {
  const el = document.createElement('button');
  el.type = 'button';
  el.className = 'social-btn';

  const icon = document.createElement('img');
  icon.src = iconSrc;
  icon.alt = iconAlt;
  icon.className = 'social-btn__icon';
  icon.width = 24;
  icon.height = 24;

  const text = document.createElement('span');
  text.className = 'social-btn__label';
  text.textContent = label;

  el.appendChild(icon);
  el.appendChild(text);
  if (onClick) el.addEventListener('click', onClick);
  return el;
}
