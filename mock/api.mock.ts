import { defineMock } from 'vite-plugin-mock-dev-server';

export default defineMock({
  url: '/api/test',
  body: {
    msg: 'This is a mock API response',
  },
});
