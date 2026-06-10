import './style.css';
import { createLoginPage } from './pages/LoginPage';

const app = document.querySelector<HTMLDivElement>('#app')!;
app.appendChild(createLoginPage());
