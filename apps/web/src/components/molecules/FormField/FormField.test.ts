import { describe, it, expect } from 'vitest';
import { createFormField } from './FormField';

describe('FormField', () => {
  it('renders label text', () => {
    const el = createFormField({ id: 'email', label: 'Email ou usuário' });
    expect(el.querySelector('label')?.textContent).toBe('Email ou usuário');
  });

  it('label htmlFor matches input id', () => {
    const el = createFormField({ id: 'email', label: 'Email' });
    const label = el.querySelector('label');
    const input = el.querySelector('input');
    expect(label?.htmlFor).toBe(input?.id);
  });

  it('passes type to the underlying input', () => {
    const el = createFormField({ id: 'pass', label: 'Senha', type: 'password' });
    expect(el.querySelector('input')?.type).toBe('password');
  });

  it('passes placeholder to the underlying input', () => {
    const el = createFormField({ id: 'email', label: 'Email', placeholder: 'usuario123' });
    expect(el.querySelector('input')?.placeholder).toBe('usuario123');
  });
});
