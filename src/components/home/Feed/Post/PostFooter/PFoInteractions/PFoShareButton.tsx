import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PiPaperPlaneTilt from '../../../../../icons/pi/PiPaperPlaneTilt'

export default function PFoShareButton() {
  return (
         <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconContainer}>
                <PiPaperPlaneTilt color={'white'}/>
            </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    iconButton: {
        padding: 7,
    },
    iconContainer: {
        width: 29,
        height: 29,
    },
})