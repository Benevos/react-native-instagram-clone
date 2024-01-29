import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AiOutlineHeart from '../../../../../icons/ai/AiOutlineHeart'
import Animated, { Easing, ReduceMotion, useAnimatedReaction, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import AiFillHeart from '../../../../../icons/ai/AiFillHeart';
import { usePostContext } from '../../../../../../context/PostContext';

interface pFoHeartButtonType {
    liked?: boolean
    setReactionsCounter: React.Dispatch<React.SetStateAction<number>>
}

export default function PFoHeartButton(props: pFoHeartButtonType) 
{
    const { liked, setReactionsCounter } = props;

    const [likedState, setLikedState] = useState(liked ? liked : false);

    const scale = useSharedValue(1);

    const handlePress = () =>
    {
        scale.value = 0;
        setLikedState(!likedState)

        if(likedState) { 
            setReactionsCounter(prev => prev-1);
            return;
        }

        setReactionsCounter(prev => prev+1)
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
                    ...styles.iconContainer,
                    transform: [{ scale: scale }]
                }}>

                     { !likedState ? <AiOutlineHeart color={'white'}/> : <AiFillHeart color={'red'}/>}
                </Animated.View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        padding: 7,
    },
    iconContainer: {
        width: 30,
        height: 30,
    },
})