import { createAuthBanner } from '../components/organisms/AuthBanner/AuthBanner';
import { createLoginForm } from '../components/organisms/LoginForm/LoginForm';
import { createAuthLayout } from '../components/templates/AuthLayout/AuthLayout';

export function createLoginPage(): HTMLElement {
  const banner = createAuthBanner({
    imageSrc: '/images/banner-login.jpg',
    imageAlt: 'Desenvolvedora trabalhando no computador',
    logoSrc: '/images/logo-small.svg',
  });

  const form = createLoginForm();

  return createAuthLayout({ banner, content: form });
}
