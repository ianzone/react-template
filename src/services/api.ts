import { mock } from './mock';

export async function api() {
  return mock.enable ? mock.fc() : 'real data';
}
