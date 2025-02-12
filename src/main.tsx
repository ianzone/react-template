import { StrictMode } from 'react';
import { Inspector } from 'react-dev-inspector';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/index.css';

const app = document.createElement('div');
app.id = 'app';
document.getElementsByTagName('body')[0].appendChild(app);
createRoot(app).render(
  <StrictMode>
    <Inspector />
    <App />
  </StrictMode>,
);
