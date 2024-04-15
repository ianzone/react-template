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

const GlobalContext = createContext<GlobalContextInterface | null>(null);

function GlobalProvider({ children }: { children: ReactNode }) {
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

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within <GlobalProvider>');
  }
  return context;
}

export { GlobalProvider, useGlobalContext };
