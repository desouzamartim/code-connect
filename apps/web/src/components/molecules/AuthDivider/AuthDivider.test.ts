import { describe, it, expect } from 'vitest';
import { createAuthDivider } from './AuthDivider';

describe('AuthDivider', () => {
  it('renders the given text', () => {
    const el = createAuthDivider('ou entre com outras contas');
    expect(el.querySelector('.auth-divider__text')?.textContent).toBe(
      'ou entre com outras contas',
    );
  });

  it('has the auth-divider class', () => {
    const el = createAuthDivider('texto');
    expect(el.classList.contains('auth-divider')).toBe(true);
  });
});
