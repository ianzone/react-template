import { defineHandler } from 'nitro';

export default defineHandler(() => {
  return { msg: 'Hello Nitro!' };
});
