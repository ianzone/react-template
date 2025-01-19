import type { CSSProperties, HTMLAttributes } from 'react';
import { useCounter } from 'src/hooks';

interface CounterProps extends HTMLAttributes<HTMLDivElement> {
  init?: number;
}

export function Counter(props: CounterProps) {
  const { count, increment } = useCounter(props.init);

  const { style } = props;
  return (
    <div style={{ ...css, ...style }}>
      <h1>{count}</h1>
      <button type='button' onClick={() => increment()}>
        Increment
      </button>
    </div>
  );
}

const css: CSSProperties = {
  backgroundColor: 'grey',
};
