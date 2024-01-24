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

function Home() {
  const isDarkMode = useColorScheme() === 'dark';

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
          <Text>Hello, world!</Text>
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