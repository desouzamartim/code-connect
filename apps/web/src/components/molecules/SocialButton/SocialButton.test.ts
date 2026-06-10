import { describe, it, expect, vi } from 'vitest';
import { createSocialButton } from './SocialButton';

describe('SocialButton', () => {
  it('renders with the given label', () => {
    const el = createSocialButton({ label: 'Github', iconSrc: '/github.svg', iconAlt: 'GitHub' });
    expect(el.querySelector('.social-btn__label')?.textContent).toBe('Github');
  });

  it('renders an icon with correct src and alt', () => {
    const el = createSocialButton({ label: 'Github', iconSrc: '/github.svg', iconAlt: 'GitHub' });
    const icon = el.querySelector<HTMLImageElement>('img');
    expect(icon?.src).toContain('/github.svg');
    expect(icon?.alt).toBe('GitHub');
  });

  it('invokes onClick when clicked', () => {
    const onClick = vi.fn();
    const el = createSocialButton({ label: 'Github', iconSrc: '/github.svg', iconAlt: 'GitHub', onClick });
    el.click();
    expect(onClick).toHaveBeenCalledOnce();
  });
});
