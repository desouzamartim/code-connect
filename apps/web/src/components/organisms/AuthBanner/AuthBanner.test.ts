import { describe, it, expect } from 'vitest';
import { createAuthBanner } from './AuthBanner';

describe('AuthBanner', () => {
  it('renders the banner image with correct src and alt', () => {
    const el = createAuthBanner({
      imageSrc: '/images/banner-login.jpg',
      imageAlt: 'Desenvolvedora trabalhando',
      logoSrc: '/images/logo-small.svg',
    });
    const img = el.querySelector<HTMLImageElement>('.auth-banner__image');
    expect(img?.src).toContain('/images/banner-login.jpg');
    expect(img?.alt).toBe('Desenvolvedora trabalhando');
  });

  it('renders the logo with alt "CodeConnect"', () => {
    const el = createAuthBanner({
      imageSrc: '/images/banner-login.jpg',
      imageAlt: 'Banner',
      logoSrc: '/images/logo-small.svg',
    });
    const logo = el.querySelector<HTMLImageElement>('.auth-banner__logo');
    expect(logo?.alt).toBe('CodeConnect');
  });

  it('renders the overlay element', () => {
    const el = createAuthBanner({
      imageSrc: '/images/banner-login.jpg',
      imageAlt: 'Banner',
      logoSrc: '/images/logo-small.svg',
    });
    expect(el.querySelector('.auth-banner__overlay')).not.toBeNull();
  });
});
