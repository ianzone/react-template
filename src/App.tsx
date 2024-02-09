import { MyPage } from 'src/pages';
import './App.css';
import { AppProvider } from './AppContext';

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <MyPage />
      </AppProvider>
    </div>
  );
}

export default App;
