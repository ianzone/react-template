import { type CSSProperties, type ReactNode, useEffect } from 'react';

interface MyContainerProps {
  children?: ReactNode;
}

export function MyContainer(props: MyContainerProps) {
  useEffect(() => {
    fetch('/api/test')
      .then((res) => res.json())
      .then((data) => {
        console.log('Mock API Response:', data);
      })
      .catch((err) => {
        console.error('Error fetching mock API:', err);
      });
  }, []);

  return <div style={styles.ctn}>{props.children}</div>;
}

const styles: Record<string, CSSProperties> = {
  ctn: {
    backgroundColor: '#00D8FF',
  },
};
