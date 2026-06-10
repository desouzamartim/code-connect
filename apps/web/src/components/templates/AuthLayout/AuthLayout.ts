export interface AuthLayoutProps {
  banner: HTMLElement;
  content: HTMLElement;
}

export function createAuthLayout({ banner, content }: AuthLayoutProps): HTMLElement {
  const page = document.createElement('div');
  page.className = 'auth-layout';

  const card = document.createElement('div');
  card.className = 'auth-layout__card';

  const bannerWrapper = document.createElement('div');
  bannerWrapper.className = 'auth-layout__banner';
  bannerWrapper.appendChild(banner);

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'auth-layout__content';
  contentWrapper.appendChild(content);

  card.appendChild(bannerWrapper);
  card.appendChild(contentWrapper);
  page.appendChild(card);

  return page;
}
