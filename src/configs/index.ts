import app1 from './app1';
import app2 from './app2';

interface Config {
  app_name: string
}

function getConfig(): Config {
  if (import.meta.env.MODE === 'app2') {
    return app2;
  }
  return app1;
}

export const config = getConfig();
