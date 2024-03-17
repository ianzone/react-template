import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

const app = document.createElement('div');
app.id = 'app';
document.getElementsByTagName('body')[0].appendChild(app);
ReactDOM.createRoot(app).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
