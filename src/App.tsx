import { Home } from 'src/pages';
import { GlobalProvider } from './contexts';

function App() {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}

export default App;
