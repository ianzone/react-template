import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface GlobalContextInterface {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  idToken: string;
  setIdToken: Dispatch<SetStateAction<string>>;
  reset: () => void;
}

const Context = createContext<GlobalContextInterface | null>(null);

export function GlobalContext({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState('');
  const [idToken, setIdToken] = useState('');

  const reset = useCallback(() => {
    setAccessToken('');
    setIdToken('');
  }, []);

  const value = useMemo(
    () => ({
      accessToken,
      setAccessToken,
      idToken,
      setIdToken,
      reset,
    }),
    [accessToken, idToken, reset],
  );

  return <Context value={value}>{children}</Context>;
}

export function useGlobalContext() {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useGlobalContext must be used within <GlobalProvider>');
  }
  return context;
}
