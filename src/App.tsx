import React from 'react';

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './lib/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Home from './screens/Home';
import CommentSheetContextProvider from './context/CommentSheetContext';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

function App(): React.JSX.Element 
{
  const storeRef = useRef<AppStore>()

    if (!storeRef.current) 
    {
        storeRef.current = makeStore()
    }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={storeRef.current}>
      
        <BottomSheetModalProvider>
          <CommentSheetContextProvider>
            <Home/>
          </CommentSheetContextProvider>
        </BottomSheetModalProvider>
      
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
