import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useQuery } from 'react-query';
import './App.css';

const bostadsregistretDataUrl = "https://raw.githubusercontent.com/gazab/bostadsregistret_jkpg_history/main/bostadsregistret_jkpg.json";

function App() {
  const { data, isLoading } = useQuery<any>('apartments', () => fetch(bostadsregistretDataUrl).then(res => res.json()));

  return (
    <>
    <div className="App">
      <header className="App-header">
        <ul>
          { isLoading ? <p>Loading!</p> :
            data.map((apartment: any) => (<li key={apartment.id}>{apartment.address}</li>))
          }
        </ul>
      </header>
    </div>
    <ReactQueryDevtools />
    </>
  );
}

export default App;
