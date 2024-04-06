import { Home } from 'src/pages';
import './App.css';
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
