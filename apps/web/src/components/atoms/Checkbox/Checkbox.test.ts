import { describe, it, expect } from 'vitest';
import { createCheckbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders with the given label', () => {
    const el = createCheckbox({ id: 'remember', label: 'Lembrar-me' });
    expect(el.querySelector('label')?.textContent).toBe('Lembrar-me');
  });

  it('label htmlFor matches input id', () => {
    const el = createCheckbox({ id: 'remember', label: 'Lembrar-me' });
    const input = el.querySelector<HTMLInputElement>('input');
    const label = el.querySelector('label');
    expect(label?.htmlFor).toBe(input?.id);
  });

  it('applies defaultChecked', () => {
    const el = createCheckbox({ id: 'cb', label: 'Lembrar', defaultChecked: true });
    const input = el.querySelector<HTMLInputElement>('input');
    expect(input?.checked).toBe(true);
  });

  it('is unchecked by default', () => {
    const el = createCheckbox({ id: 'cb', label: 'Lembrar' });
    const input = el.querySelector<HTMLInputElement>('input');
    expect(input?.checked).toBe(false);
  });
});
