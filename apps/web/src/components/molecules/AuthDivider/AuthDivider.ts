export function createAuthDivider(text: string): HTMLElement {
  const el = document.createElement('div');
  el.className = 'auth-divider';

  const span = document.createElement('span');
  span.className = 'auth-divider__text';
  span.textContent = text;

  el.appendChild(span);
  return el;
}
