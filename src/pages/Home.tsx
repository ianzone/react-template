import { reactLogo } from 'src/assets';
import { MyComponent } from 'src/components';
import { MyContainer } from 'src/containers';
import { useCounter } from 'src/hooks';

export function Home() {
  const { count, increment } = useCounter();

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={increment} type='button'>
          count is: {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>{JSON.stringify(import.meta.env)}</p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <MyContainer />
      <MyComponent />
    </div>
  );
}
