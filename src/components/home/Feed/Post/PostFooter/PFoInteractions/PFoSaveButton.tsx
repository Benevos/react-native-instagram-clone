import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FaRegBookmark from '../../../../../icons/fa6/FaRegBookmark'
import Animated, { Easing, ReduceMotion, useAnimatedReaction, useSharedValue, withTiming } from 'react-native-reanimated'
import FaBookmark from '../../../../../icons/fa6/FaBookMark'

interface pFoSavedButtonType {
    saved?: boolean
}

export default function PFoSaveButton(props: pFoSavedButtonType) 
{
    const { saved } = props;

    const [savedState, setSavedState] = useState(saved ? saved : false); 

    const scale = useSharedValue(1); 

    const handlePress = () =>
    {
        scale.value = 0;
        setSavedState(!savedState);
    }

    useAnimatedReaction(() => scale.value, (prev, current) => {
        if(prev === 0)
        {
            scale.value = withTiming(scale.value + 1, {
                duration: 300,
                easing: Easing.elastic(2),
                reduceMotion: ReduceMotion.System,
            })
        }
    })
    
    return (
        <TouchableOpacity onPress={handlePress} style={styles.iconButton}>
            <Animated.View style={{
                ...styles.icon,
                transform: [{ scale: scale }]
            }}>
                { !savedState ? <FaRegBookmark color={'white'}/> : <FaBookmark color={'white'}/> }
            </Animated.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        padding: 7,
        paddingRight: 16,  
    },
    icon: {
        width: 22,
        height: 22,
    }
})