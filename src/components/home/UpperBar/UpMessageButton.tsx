import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import RiMessengerLine from '../../icons/ri/RiMessengerLine';

import React from 'react'

export default function UpMessageButton() {
    return (
        <TouchableOpacity style={styles.iconButton} activeOpacity={1} onPress={() => console.log('Pressed')}>
            <RiMessengerLine style={styles.icon} color={'white'}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 28,
      height: 28
    },
    icon: {
        width: '100%',
        height: '100%',
      }
  });