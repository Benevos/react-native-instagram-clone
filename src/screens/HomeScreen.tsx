import React, { useCallback, useMemo, useRef } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Animated,
} from 'react-native';

import UpperBar from '../components/home/UpperBar/UpperBar';
import ActionBar from '../components/home/ActionBar/ActionBar';
import Feed from '../components/home/Feed/Feed';
import CommentsBottomSheet from '../components/home/CommentsBottomSheet/CommentsBottomSheet';
import { useSharedValue } from 'react-native-reanimated';
import NavigationContextProvider from '../context/NavigationContext';


function HomeScreen({ navigation }) {
  
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 64);
  const upperBarTranslateY = diffClamp.interpolate({
    inputRange: [0, 60],
    outputRange: [0, -60],
  });

  const upperBarOpacity = useSharedValue(1);

  return (
    <NavigationContextProvider navigation={navigation}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar/>
        
          <UpperBar translateY={upperBarTranslateY} opacity={upperBarOpacity}/>

          <Feed scrollY={scrollY} opacity={upperBarOpacity}/>

          <ActionBar/>

          <CommentsBottomSheet/>
        
      </SafeAreaView>
    </NavigationContextProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default HomeScreen;