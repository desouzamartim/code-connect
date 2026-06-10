import { describe, it, expect, vi } from 'vitest';
import { createLoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('renders the Login heading', () => {
    const el = createLoginForm();
    expect(el.querySelector('.login-form__title')?.textContent).toBe('Login');
  });

  it('renders email and password fields', () => {
    const el = createLoginForm();
    expect(el.querySelector('#login-email')).not.toBeNull();
    expect(el.querySelector('#login-password')).not.toBeNull();
  });

  it('renders the remember-me checkbox checked by default', () => {
    const el = createLoginForm();
    const checkbox = el.querySelector<HTMLInputElement>('#login-remember');
    expect(checkbox?.checked).toBe(true);
  });

  it('renders two social buttons', () => {
    const el = createLoginForm();
    const buttons = el.querySelectorAll('.social-btn');
    expect(buttons).toHaveLength(2);
  });

  it('calls onSubmit with form data when submitted', () => {
    const onSubmit = vi.fn();
    const el = createLoginForm({ onSubmit });
    document.body.appendChild(el);

    const emailInput = el.querySelector<HTMLInputElement>('#login-email')!;
    const passwordInput = el.querySelector<HTMLInputElement>('#login-password')!;
    emailInput.value = 'usuario123';
    passwordInput.value = 'secret';

    el.querySelector('form')!.dispatchEvent(new Event('submit'));
    expect(onSubmit).toHaveBeenCalledWith({
      login: 'usuario123',
      password: 'secret',
      remember: true,
    });

    document.body.removeChild(el);
  });
});
