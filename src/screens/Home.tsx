import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import UpperBar from '../components/home/UpperBar';
import ActionBar from '../components/home/ActionBar';
import Stories from '../components/home/Stories/Stories';

import { Provider } from 'react-redux';
import { useAppSelector } from '../lib/hooks';


function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  const gretting = useAppSelector(state => state.test.gretting)

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      <UpperBar/>

      <ScrollView style={styles.scrollView}
        contentInsetAdjustmentBehavior="automatic">

        <Stories/>

        <View>
          <Text>{gretting}</Text>
        </View>

      </ScrollView>

      <ActionBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
   
  },
  icon: {
    width: '100%',
    height: '100%',
  }
});

export default Home;