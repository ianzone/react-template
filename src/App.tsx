import { Home } from 'src/pages';
import { GlobalProvider } from './contexts';

export function App() {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}
