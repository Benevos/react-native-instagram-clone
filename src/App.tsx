import React from 'react';

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './lib/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
      <GestureHandlerRootView style={{flex: 1}}>
        <Home/>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
