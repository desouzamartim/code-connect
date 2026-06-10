import { describe, it, expect } from 'vitest';
import { createAuthLayout } from './AuthLayout';

function makeDiv(text: string): HTMLElement {
  const el = document.createElement('div');
  el.textContent = text;
  return el;
}

describe('AuthLayout', () => {
  it('renders the banner slot content', () => {
    const banner = makeDiv('banner-content');
    const el = createAuthLayout({ banner, content: makeDiv('form') });
    expect(el.querySelector('.auth-layout__banner')?.textContent).toBe('banner-content');
  });

  it('renders the content slot', () => {
    const content = makeDiv('form-content');
    const el = createAuthLayout({ banner: makeDiv('banner'), content });
    expect(el.querySelector('.auth-layout__content')?.textContent).toBe('form-content');
  });

  it('wraps both slots in auth-layout__card', () => {
    const el = createAuthLayout({ banner: makeDiv('b'), content: makeDiv('c') });
    const card = el.querySelector('.auth-layout__card');
    expect(card?.querySelector('.auth-layout__banner')).not.toBeNull();
    expect(card?.querySelector('.auth-layout__content')).not.toBeNull();
  });
});
