import React, { useEffect } from 'react'

import {
  Animated,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import RiMessengerLine from '../../icons/ri/RiMessengerLine';
import FaRegHeart from '../../icons/fa6/FaRegHeart';
import InLogo from '../../icons/in/InLogo';
import AiOutlineHeart from '../../icons/ai/AiOutlineHeart';
import UpHeartButton from './UpHeartButton';
import UpMessageButton from './UpMessageButton';
import { SharedValue, useSharedValue } from 'react-native-reanimated';
import { useAppSelector } from '../../../lib/hooks';

interface UpperBarProps {
  translateY: Animated.AnimatedInterpolation<string | number>,
  opacity: SharedValue<number>,
}

export default function UpperBar(props: UpperBarProps) 
{
  const { translateY, opacity } = props;
  
  return (
      <Animated.View style={{
          ...styles.container,
          transform: [{translateY: translateY}],
        }}>

          <InLogo style={styles.instagramLogo} color={'white'}/>

          <View style={styles.iconButtonsContainer}>

              <UpHeartButton/>
              
              <UpMessageButton/>
          </View>
      </Animated.View>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      backgroundColor: 'black',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: 60,
    },
    iconButtonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 23,
      marginRight: 23,
    },
    instagramLogo: {
      marginTop: 10,
      marginLeft: 10,
      width: 115,
      height: 40,
    },
  });