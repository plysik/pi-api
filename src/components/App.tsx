// import { useState, useEffect } from 'react';
import '../asstets/App.css';
import '../asstets/style.css';
import { digits } from '../data/conts';
import { useFetch } from '../hooks/useFetch';
import Printer from './Printer/Printer';
import { Store } from './Store';
import { Header } from './Header';
import Updater from './Updater';

function App() {
  const pi = useFetch<string>(`https://uploadbeta.com/api/pi/?cached&n=${digits + 1}`);
  return (
    <div className="App">
      <Header>Colors of Π</Header>
      <Store>
        {pi &&
          <>
            <Updater pi={pi.slice(1)} />
            <Printer pi={pi.slice(1)} />
          </>
        }
      </Store>
    </div>
  );
}

export default App;
