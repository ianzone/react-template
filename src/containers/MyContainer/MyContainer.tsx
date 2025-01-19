import type { CSSProperties } from 'react';

export function MyContainer() {
  return (
    <div style={styles.ctn}>
      <div style={styles.cmp}>My Container</div>
    </div>
  );
}

const styles = {
  ctn: {
    backgroundColor: '#00D8FF',
  },
  cmp: {
    color: 'green',
  },
} satisfies Record<string, CSSProperties>;
