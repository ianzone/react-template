import { sleep } from '@es-proj/utils';

export async function api(controller: AbortController) {
  await sleep(1);
  const res = await fetch('/api/test', { signal: controller.signal });
  const data = await res.json();
  return data;
}
