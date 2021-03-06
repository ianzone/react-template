import { logo } from '@assets';
import { MyComponent } from '@components';
import { MyContainer } from '@containers';
import { useCounter } from '@hooks';
import './App.css';

function App() {
  const { count, increment } = useCounter();

  return (
    <div className='app'>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button type='button' onClick={increment}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='app-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='app-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
        <MyContainer />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
