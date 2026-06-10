import { createButton } from '../../atoms/Button/Button';
import { createCheckbox } from '../../atoms/Checkbox/Checkbox';
import { createAuthDivider } from '../../molecules/AuthDivider/AuthDivider';
import { createFormField } from '../../molecules/FormField/FormField';
import { createSocialButton } from '../../molecules/SocialButton/SocialButton';

export interface LoginFormSubmitData {
  login: string;
  password: string;
  remember: boolean;
}

export interface LoginFormProps {
  onSubmit?: (data: LoginFormSubmitData) => void;
}

export function createLoginForm({ onSubmit }: LoginFormProps = {}): HTMLElement {
  const section = document.createElement('div');
  section.className = 'login-form';

  const heading = document.createElement('h1');
  heading.className = 'login-form__title';
  heading.textContent = 'Login';

  const subtitle = document.createElement('p');
  subtitle.className = 'login-form__subtitle';
  subtitle.textContent = 'Boas-vindas! Faça seu login.';

  const form = document.createElement('form');
  form.className = 'login-form__form';
  form.noValidate = true;

  const emailField = createFormField({
    id: 'login-email',
    label: 'Email ou usuário',
    placeholder: 'usuario123',
    name: 'login',
    autocomplete: 'username',
  });

  const passwordField = createFormField({
    id: 'login-password',
    label: 'Senha',
    type: 'password',
    placeholder: '••••••',
    name: 'password',
    autocomplete: 'current-password',
  });

  const rememberRow = document.createElement('div');
  rememberRow.className = 'login-form__remember-row';

  const rememberCheckbox = createCheckbox({
    id: 'login-remember',
    label: 'Lembrar-me',
    name: 'remember',
    defaultChecked: true,
  });

  const forgotLink = document.createElement('a');
  forgotLink.href = '#';
  forgotLink.className = 'login-form__forgot-link';
  forgotLink.textContent = 'Esqueci a senha';

  rememberRow.appendChild(rememberCheckbox);
  rememberRow.appendChild(forgotLink);

  const submitBtn = createButton({ label: 'Login →', type: 'submit', fullWidth: true });

  form.appendChild(emailField);
  form.appendChild(passwordField);
  form.appendChild(rememberRow);
  form.appendChild(submitBtn);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    const loginInput = form.querySelector<HTMLInputElement>('#login-email');
    const passwordInput = form.querySelector<HTMLInputElement>('#login-password');
    const rememberInput = form.querySelector<HTMLInputElement>('#login-remember');
    onSubmit({
      login: loginInput?.value ?? '',
      password: passwordInput?.value ?? '',
      remember: rememberInput?.checked ?? false,
    });
  });

  const divider = createAuthDivider('ou entre com outras contas');

  const socialRow = document.createElement('div');
  socialRow.className = 'login-form__social-row';
  socialRow.appendChild(
    createSocialButton({ label: 'Github', iconSrc: '/images/github.svg', iconAlt: 'GitHub' }),
  );
  socialRow.appendChild(
    createSocialButton({ label: 'Gmail', iconSrc: '/images/google.svg', iconAlt: 'Google' }),
  );

  const signupRow = document.createElement('p');
  signupRow.className = 'login-form__signup-row';
  signupRow.appendChild(document.createTextNode('Ainda não tem conta? '));

  const signupLink = document.createElement('a');
  signupLink.href = '#';
  signupLink.className = 'login-form__signup-link';
  signupLink.appendChild(document.createTextNode('Crie seu cadastro! '));

  const signupIcon = document.createElement('img');
  signupIcon.src = '/images/assignment.svg';
  signupIcon.alt = '';
  signupIcon.className = 'login-form__signup-icon';
  signupIcon.width = 16;
  signupIcon.height = 16;
  signupLink.appendChild(signupIcon);
  signupRow.appendChild(signupLink);

  section.appendChild(heading);
  section.appendChild(subtitle);
  section.appendChild(form);
  section.appendChild(divider);
  section.appendChild(socialRow);
  section.appendChild(signupRow);

  return section;
}
