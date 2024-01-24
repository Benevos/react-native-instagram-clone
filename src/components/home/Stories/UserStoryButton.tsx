import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native-svg';
import FaPlus from '../../icons/fa/FaPlus';
import StoryButton from './StoryButton';

interface storyButtonType {
    seen: boolean,
    uri?: string,
}

export default function UserStoryButton(props: storyButtonType) 
{
    const { seen, uri } = props;
  
    return (
        <View style={styles.container}>
            <StoryButton seen={seen} uri={uri}/>

            <View style={styles.addStoryButtonBackdrop}>
                <TouchableOpacity style={styles.addStoryButton}>
                    <View style={styles.iconContainer}>
                        <FaPlus style={styles.icon} color={'white'}/>
                    </View>
                </TouchableOpacity>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        width: 'auto',
    },
    addStoryButtonBackdrop: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        bottom: 8,
        backgroundColor: 'black',
        height: 27,
        width: 27,
        borderRadius: 999,
    },
    addStoryButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0099ff',
        height: 22,
        width: 22,
        borderRadius: 999,
    },
    iconContainer: {
        width: 11,
        height: 11,
    },
    icon: {
        width: '100%',
        height: '100%',
    }
});