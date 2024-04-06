import type { CSSProperties } from 'react';

export function MyContainer() {
  return <div style={styles.ctn}>My Container</div>;
}

const styles = {
  ctn: {
    backgroundColor: '#00D8FF',
  },
} satisfies Record<string, CSSProperties>;
