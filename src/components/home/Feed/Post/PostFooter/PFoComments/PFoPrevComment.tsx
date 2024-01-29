import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Comment } from '../../../../../../types/post';
import Animated, { Easing, ReduceMotion, useAnimatedReaction, useSharedValue, withTiming } from 'react-native-reanimated';
import AiOutlineHeart from '../../../../../icons/ai/AiOutlineHeart';
import AiFillHeart from '../../../../../icons/ai/AiFillHeart';

export default function PFoPrevComment({ comment, liked }: { comment: Comment, liked?: boolean }) 
{
    const { username, body } = comment;

    const [likedState, setLikedState] = useState(liked ? liked : false);
    
    const scale = useSharedValue(1);

    const handlePress = () =>
    {
        scale.value = 0;
        setLikedState(!likedState)
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
        <View style={styles.prevCommentContainer}>
            <Text>
                <Text style={styles.username}>{`${username}`}</Text>

                {  body.length > 50 ?
                    <>
                        <Text style={styles.comment}>{` ${body.slice(0,50)}`}</Text>
                        <Text style={styles.suspesive}>...</Text>
                    </> :
                    <Text style={styles.comment}>{` ${body}`}</Text>
                }
            </Text>

            <TouchableOpacity onPress={handlePress} style={styles.iconButton}>
                <Animated.View style={{
                    ...styles.iconContainer,
                    transform: [{ scale: scale }]
                    }}>
                     { !likedState ? <AiOutlineHeart color={'#B5B5B5'}/> : <AiFillHeart color={'red'}/>}
                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    prevCommentContainer: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 40,
        position: 'relative',
    },
    username: {
        fontWeight: '500',
        color: 'white',
        lineHeight: 19,
    },
    comment: {
        color: '#f2f2f2',
        fontWeight: '400',
    },
    suspesive: {
        color: 'gray'
    },
    iconButton: {
        padding: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: -27,
        top: -46,
    },
    iconContainer: {
        width: 13,
        height: 13    
    }
})