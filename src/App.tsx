import { MyPage } from 'src/pages';
import './App.css';
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
      <MyPage />
    </AppProvider>
  );
}

export default App;
