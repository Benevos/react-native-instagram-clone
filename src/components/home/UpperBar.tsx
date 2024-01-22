import React from 'react'

import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import MessengerLine from '../icons/ri/MessengerLine';
import RegHeart from '../icons/fa6/RegHeart';
import InstagramLogo from '../icons/instagram/instagramLogo';

export default function UpperBar() {
    return (
        <View style={upperBarStyles.container}>

            <InstagramLogo style={upperBarStyles.instagramLogo} color={'white'}/>

            <View style={upperBarStyles.iconButtonContainer}>

                <TouchableOpacity style={upperBarStyles.heartButton} activeOpacity={1} onPress={() => console.log('Pressed')}>
                    <RegHeart style={upperBarStyles.icon} color={'white'}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={upperBarStyles.messengerButton} activeOpacity={1} onPress={() => console.log('Pressed')}>
                    <MessengerLine style={upperBarStyles.icon} color={'white'}/>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const upperBarStyles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: 60,
    },
    iconButtonContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 23,
      marginRight: 23,
    },
    messengerButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 28,
      height: 28
    },
    heartButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 25,
      height: 25
    },
    instagramLogo: {
      marginTop: 10,
      marginLeft: 10,
      width: 115,
      height: 40,
    },
    icon: {
        width: '100%',
        height: '100%',
      }
  });