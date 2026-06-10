import { describe, it, expect, vi } from 'vitest';
import { createButton } from './Button';

describe('Button', () => {
  it('renders with the given label', () => {
    const el = createButton({ label: 'Login →' });
    expect(el.textContent).toBe('Login →');
  });

  it('defaults to type="button"', () => {
    const el = createButton({ label: 'Click' });
    expect(el.type).toBe('button');
  });

  it('sets type="submit" when specified', () => {
    const el = createButton({ label: 'Submit', type: 'submit' });
    expect(el.type).toBe('submit');
  });

  it('adds btn--full class when fullWidth is true', () => {
    const el = createButton({ label: 'Submit', fullWidth: true });
    expect(el.classList.contains('btn--full')).toBe(true);
  });

  it('invokes onClick when clicked', () => {
    const onClick = vi.fn();
    const el = createButton({ label: 'Click', onClick });
    el.click();
    expect(onClick).toHaveBeenCalledOnce();
  });
});
