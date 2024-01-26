import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import AiOutlineHeart from '../../icons/ai/AiOutlineHeart';

import React from 'react'

export default function UpHeartButton() {
    return (
        <TouchableOpacity style={styles.iconButton} activeOpacity={1} onPress={() => console.log('Pressed')}>
            <AiOutlineHeart style={styles.icon} color={'white'}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 29,
      height: 29,
    },
    icon: {
        width: '100%',
        height: '100%',
      }
  });