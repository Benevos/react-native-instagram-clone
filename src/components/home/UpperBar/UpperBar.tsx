import React from 'react'

import {
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

export default function UpperBar() {
    return (
        <View style={styles.container}>

            <InLogo style={styles.instagramLogo} color={'white'}/>

            <View style={styles.iconButtonsContainer}>

                <UpHeartButton/>
                
                <UpMessageButton/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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