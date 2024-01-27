import React, { useCallback, useMemo, useRef } from 'react';

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

import UpperBar from '../components/home/UpperBar/UpperBar';
import ActionBar from '../components/home/ActionBar/ActionBar';
import Stories from '../components/home/Stories/Stories';
import Feed from '../components/home/Feed/Feed';
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import CommentsBottomSheet from '../components/home/CommentsBottomSheet/CommentsBottomSheet';

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

      <CommentsBottomSheet/>
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