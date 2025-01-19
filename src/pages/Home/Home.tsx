import { reactLogo } from 'src/assets';
import { Counter } from 'src/components';
import { MyContainer } from 'src/containers';
import styles from './styles.module.css';

export function Home() {
  return (
    <div>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className={styles.logo} alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className={`${styles.react} ${styles.logo}`} alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <Counter init={5} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>{JSON.stringify(import.meta.env)}</p>
      </div>
      <p className={styles['read-the-docs']}>Click on the Vite and React logos to learn more</p>
      <MyContainer />
    </div>
  );
}
