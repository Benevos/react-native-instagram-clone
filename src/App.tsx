import React from 'react';

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './lib/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from './screens/HomeScreen';
import CommentSheetContextProvider from './context/CommentSheetContext';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoriesScreen from './screens/StoriesScreen';

const Stack = createNativeStackNavigator()

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
        <NavigationContainer>
          <BottomSheetModalProvider>
            <CommentSheetContextProvider>

              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen}/>
                <Stack.Screen  options={{headerShown: false}} name="Stories" component={StoriesScreen}/>
                
              </Stack.Navigator>
              
            </CommentSheetContextProvider>
          </BottomSheetModalProvider>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
