import { useCallback, useState } from 'react';

export const useCounter = (init = 0) => {
  const [count, setCount] = useState(init);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  return { count, increment };
};
