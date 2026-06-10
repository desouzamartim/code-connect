import { describe, it, expect } from 'vitest';
import { createInput } from './Input';

describe('Input', () => {
  it('renders with the given id', () => {
    const el = createInput({ id: 'email' });
    expect(el.id).toBe('email');
  });

  it('defaults to type="text"', () => {
    const el = createInput({ id: 'field' });
    expect(el.type).toBe('text');
  });

  it('sets type="password" when specified', () => {
    const el = createInput({ id: 'pass', type: 'password' });
    expect(el.type).toBe('password');
  });

  it('sets placeholder text', () => {
    const el = createInput({ id: 'field', placeholder: 'usuario123' });
    expect(el.placeholder).toBe('usuario123');
  });

  it('sets name attribute', () => {
    const el = createInput({ id: 'field', name: 'login' });
    expect(el.name).toBe('login');
  });
});
