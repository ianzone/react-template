import type { CSSProperties, ReactNode } from 'react';

interface MyContainerProps {
  children?: ReactNode;
}

export function MyContainer(props: MyContainerProps) {
  return <div style={styles.ctn}>{props.children}</div>;
}

const styles = {
  ctn: {
    backgroundColor: '#00D8FF',
  },
} satisfies Record<string, CSSProperties>;
