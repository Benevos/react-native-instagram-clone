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
import ActionBar from '../components/home/ActionBar/ActionBar';
import Stories from '../components/home/Stories/Stories';
import Feed from '../components/home/Feed/Feed';

function Home() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      <UpperBar/>

      <Feed/>

      <ActionBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default Home;