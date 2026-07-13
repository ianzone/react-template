import { type CSSProperties, type ReactNode, useEffect, useState } from 'react';
import { api } from 'src/services';

interface MyContainerProps {
  children?: ReactNode;
}

export function MyContainer(props: MyContainerProps) {
  const [res, setRes] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    api(controller)
      .then((data) => {
        console.log('Mock API Response:', data);
        setRes(data);
      })
      .catch((err) => {
        console.error('Error fetching mock API:', err);
      });
    return () => controller.abort();
  }, []);

  return (
    <div>
      <div>API Response: {res ? JSON.stringify(res) : 'Loading...'}</div>
      <div style={styles.ctn}>{props.children}</div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  ctn: {
    backgroundColor: '#00D8FF',
  },
};
