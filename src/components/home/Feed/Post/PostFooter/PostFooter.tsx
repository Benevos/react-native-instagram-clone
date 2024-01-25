import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FaRegHeart from '../../../../icons/fa6/FaRegHeart'
import FaRegComment from '../../../../icons/fa/FaRegComment'
import FiMessageCircle from '../../../../icons/fi/FiMessageCircle'
import PiPaperPlaneTiltBold from '../../../../icons/pi/PiPaperPlaneTiltBold'
import GoHeart from '../../../../icons/go/GoHeart'
import FaBookmark from '../../../../icons/fa6/FaBookmark'

export default function PostFooter() {
  return (
    <View style={styles.container}>
      <View style={styles.interactions}>
        <View style={styles.reactions}>
            <TouchableOpacity style={styles.iconButton}>
                <View style={styles.iconContainer}>
                    <GoHeart color={'white'}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
                <View style={styles.iconContainer}>
                    <FiMessageCircle color={'white'}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
                <View style={styles.iconContainer}>
                    <PiPaperPlaneTiltBold color={'white'}/>
                </View>
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.iconBookamrkButton}>
            <View style={styles.iconBookmark}>
                <FaBookmark color={'white'}/>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {   
        width: '100%',
    },
    interactions: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    reactions: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        gap: 4,
    },
    iconButton: {
        padding: 7,
        
    },
    iconContainer: {

        width: 29,
        height: 29,
    },
    iconBookamrkButton: {
        padding: 7,
        paddingRight: 16,  
    },
    iconBookmark: {
        width: 24,
        height: 24,
    }
})