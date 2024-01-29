import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GoHeart from '../../icons/go/GoHeart'
import Animated, { Easing, ReduceMotion, useAnimatedReaction, useSharedValue, withTiming } from 'react-native-reanimated';
import AiOutlineHeart from '../../icons/ai/AiOutlineHeart';
import AiFillHeart from '../../icons/ai/AiFillHeart';


interface CoHeartButtonProps {
    reactions: number,
    liked?: boolean,
}

export default function CoHeartButton(props: CoHeartButtonProps) 
{
    const { reactions, liked } = props;

    const [likedState, setLikedState] = useState(liked ? liked : false);
    const [reactionsCounter, setReactionsCounter] = useState(reactions);

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
                { !likedState ? <AiOutlineHeart color={'#B5B5B5'}/> : <AiFillHeart color={'red'}/>}
            </Animated.View>
            <Text style={styles.reactionsCounter}>{reactionsCounter}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        position: 'absolute',
        right: -5,
        padding: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        width: 16,
        height: 16,
    },
    reactionsCounter: {
        color: '#b5b5b5',
        fontSize: 11,
        fontWeight: '500',
    }
})