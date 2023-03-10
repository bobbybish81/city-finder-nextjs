import type { AppProps } from 'next/app';
import { useState, createContext } from 'react';
import IState from '../interfaces/IState';
import "bootstrap/dist/css/bootstrap.min.css"; 
import '@/styles/globals.css';

interface AppContextProps {
  state: IState;
  setState: React.Dispatch<React.SetStateAction<IState>>;
}

const initialState:IState = {
  started: false,
  playing: false,
  index: 0,
  citiesFound: 0,
  kilometers: 1500,
  displayGuide: false,
  location: { lat: null, lng: null },
  guessLocation: { lat: null, lng: null },
  showResults: false,
};

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  setState: () => {},
});

export default function App({ Component, pageProps }: AppProps) {

  const [state, setState] = useState<IState>(initialState);

  return (
    <AppContext.Provider value={{ state, setState }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
