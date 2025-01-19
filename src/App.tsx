import { Home } from 'src/pages';
import { GlobalContext } from './contexts';

export function App() {
  return (
    <GlobalContext>
      <Home />
    </GlobalContext>
  );
}
