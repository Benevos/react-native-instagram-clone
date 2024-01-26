import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FiMessageCircle from '../../../../../icons/fi/FiMessageCircle'

export default function PFoCommentButton() {
  return (
         <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconContainer}>
                <FiMessageCircle color={'white'}/>
            </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    iconButton: {
        padding: 7,
        transform: [{scaleX: -1}],
    },
    iconContainer: {
        width: 28,
        height: 28,
    },
})