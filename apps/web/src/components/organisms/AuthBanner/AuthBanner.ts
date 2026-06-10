export interface AuthBannerProps {
  imageSrc: string;
  imageAlt: string;
  logoSrc: string;
}

export function createAuthBanner({ imageSrc, imageAlt, logoSrc }: AuthBannerProps): HTMLElement {
  const el = document.createElement('div');
  el.className = 'auth-banner';

  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = imageAlt;
  img.className = 'auth-banner__image';

  const overlay = document.createElement('div');
  overlay.className = 'auth-banner__overlay';

  const logo = document.createElement('img');
  logo.src = logoSrc;
  logo.alt = 'CodeConnect';
  logo.className = 'auth-banner__logo';

  overlay.appendChild(logo);
  el.appendChild(img);
  el.appendChild(overlay);
  return el;
}
