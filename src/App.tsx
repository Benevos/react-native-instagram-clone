import React from 'react';

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './lib/store'

import Home from './screens/Home';

function App(): React.JSX.Element 
{
  const storeRef = useRef<AppStore>()

    if (!storeRef.current) 
    {
        storeRef.current = makeStore()
    }

  return (
    <Provider store={storeRef.current}>
      <Home/>
    </Provider>
  );
}

export default App;
