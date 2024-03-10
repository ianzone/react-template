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

interface AppContextInterface {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  idToken: string;
  setIdToken: Dispatch<SetStateAction<string>>;
  reset: () => void;
}

const AppContext = createContext<AppContextInterface | null>(null);

function AppProvider({ children }: { children: ReactNode }) {
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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within <AppContext.Provider>');
  }
  return context;
}

export { AppProvider, useAppContext };
