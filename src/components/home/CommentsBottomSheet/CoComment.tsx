import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useMemo, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import GoHeart from '../../icons/go/GoHeart';
import CoHeartButton from './CoHeartButton';

interface CoCommentType{
    seen?: boolean,
    body: string,
    username: string,
    reactions: number,
}

export default function CoComment(props: CoCommentType) 
{
    const { seen, body, username, reactions } = props;

    const getRandomNumber = (min: number, max: number) => {return parseInt((Math.random() * (max - min) + min).toFixed(0));}

    const [isSeen, setIsSeen] = useState( seen ? seen : 
                                          getRandomNumber(1,10)%3!==0 ? true : false
                                        );

    const newStoryRingColors = ['#ffc400', '#ffc400', '#ff0000', '#ff00d4', '#ff00d4'];
    const seenStoryRingColors = ['#2a2a2a', '#2a2a2a'];

    const randomUri = useMemo(() => 
    {
        const number = getRandomNumber(1,78); 
        return `https://xsgames.co/randomusers/assets/avatars/${number % 2 === 0 ? 'male' : 'female'}/${number}.jpg`
    }
    , []);

    return (
        <View style={styles.commentContainer}>
            <TouchableOpacity onPress={() => setIsSeen(true)}>
                <LinearGradient style={ styles.newStoryRing }
                    start={{x: 0, y: 1}} end={{x: 1, y: 0}} 
                    colors={ isSeen ? seenStoryRingColors : newStoryRingColors }>

                    <View style={styles.pictureBackdrop}>
                        <View style={styles.pictureContainer}>
                            <Image style={styles.picture} source={{uri: randomUri}}/>
                        </View>
                    </View>
                </LinearGradient>
            </TouchableOpacity>

            <View style={styles.bodyContainer}>    
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.bodyText}>{body}</Text>
                <Text style={styles.answerButton}>Answer</Text>
            </View>

            <CoHeartButton reactions={reactions}/>
        </View>
    )
}

const imageSize = 38;

const styles = StyleSheet.create({
    commentContainer: {
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        flex: 1,
        marginBottom: 15,
    },
    pictureContainer: {
        width: imageSize,
        height: imageSize,
        borderRadius: 999,
    },
    newStoryRing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: imageSize+8,
        height: imageSize+8,
        borderRadius: 999,
    },
    pictureBackdrop: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: imageSize+5,
        height: imageSize+5,
        backgroundColor: '#2a2a2a',
        borderRadius: 999,
    },
    picture: {
        borderRadius: 999,
        width: '100%',
        height: '100%', 
    },
    bodyContainer: {
        display: 'flex',
        paddingRight: 90,
        paddingLeft: 10,
    },
    bodyText: {
        color: '#f2f2f2',
        fontWeight: '400',
        fontSize: 13,
    },
    username: {
        color: 'white',
        fontWeight: '500',
        fontSize: 12,
    },
    answerButton: {
        fontSize: 13,
        fontWeight: '500',
        color: '#a3a3a3',
        marginTop: 4,
    },

})