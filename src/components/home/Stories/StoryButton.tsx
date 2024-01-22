import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

interface storyButtonType {
    seen: boolean,
    uri?: string,
}

export default function StoryButton(props: storyButtonType) 
{
    const { seen } = props;
    let { uri } = props;

    const newStoryRingColors = ['#ffc400', '#ffc400', '#ff0000', '#ff00d4', '#ff00d4'];
    const seenStoryRingColors = ['rgba(126,126,126,0.6)', 'rgba(126,126,126,0.6)'];

    const getRandomNumber = (min: number, max: number) => {return Math.random() * (max - min) + min;}

    if(!uri)
    {
        const number = parseInt(getRandomNumber(1, 78).toFixed(0));
        uri = `https://xsgames.co/randomusers/assets/avatars/${number % 2 === 0 ? 'male' : 'female'}/${number}.jpg`;
    }

    console.log(uri);'        '

    return (
        <TouchableOpacity onPress={() => {console.log('Touched')}} style={storyButtonStyles.storyButton}>
            <LinearGradient style={ seen ? storyButtonStyles.seenStoryRing : storyButtonStyles.newStoryRing }
                        start={{x: 0, y: 1}} end={{x: 1, y: 0}} 
                        colors={ seen ? seenStoryRingColors : newStoryRingColors }>
                <View>
                    <View style={ seen ? storyButtonStyles.seenStoryBackdrop : storyButtonStyles.newStoryBackdrop}>
                        <View style={storyButtonStyles.storyImageContainer}>
                            <Image style={storyButtonStyles.storyImage}
                                source={{uri: uri}}/>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const storyButtonStyles = StyleSheet.create({
    storyButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 5,
        paddingLeft: 5,
        height: '100%',
    },
    seenStoryRing: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 90,
        borderRadius: 999,
    },
    newStoryRing: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 92,
        height: 92,
        borderRadius: 999,
    },
    newStoryBackdrop: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
        width: 88,
        height: 88,
        backgroundColor: 'black'
    },
    seenStoryBackdrop: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
        width: 88,
        height: 88,
        backgroundColor: 'black'
    },
    storyImageContainer: {
        width: 79,
        height: 79,
        borderRadius: 999,
        borderColor: 'rgba(126,126,126,0.6)',
        borderWidth: 1,
        backgroundColor: 'brown'
    },
    storyImage: {
        width: '100%',
        height: '100%',
        borderRadius: 999
    }
});