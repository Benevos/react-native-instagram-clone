import { View, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import React, { useMemo, useState } from 'react'

import LinearGradient from 'react-native-linear-gradient';
import { useNavigationContext } from '../../../context/NavigationContext';
import Animated from 'react-native-reanimated';

interface storyButtonType {
    seen: boolean,
    uri?: string,
}

export default function StoryButton(props: storyButtonType) 
{
    const { seen, uri } = props;

    const { navigation } = useNavigationContext();

    const [isSeen, setIsSeen] = useState(seen);
   
    const newStoryRingColors = ['#ffc400', '#ffc400', '#ff0000', '#ff00d4', '#ff00d4'];
    const seenStoryRingColors = ['rgba(126,126,126,0.6)', 'rgba(126,126,126,0.6)'];

    const getRandomNumber = (min: number, max: number) => {return Math.random() * (max - min) + min;}
    
    const uriMemo = useMemo(() => 
    {
        if(uri) { return uri; }
        const number = parseInt(getRandomNumber(1, 78).toFixed(0));
        const randomUri = `https://xsgames.co/randomusers/assets/avatars/${number % 2 === 0 ? 'male' : 'female'}/${number}.jpg`;
        return randomUri;
    }, [uri])
        
    

    const handlePress = () =>
    {
        if(!seen) { setIsSeen(true); }
        navigation.navigate('Stories')
        
    }

    return (
        <TouchableOpacity onPress={handlePress} style={styles.storyButton}>
            <LinearGradient style={ isSeen ? styles.seenStoryRing : styles.newStoryRing }
                        start={{x: 0, y: 1}} end={{x: 1, y: 0}} 
                        colors={ isSeen ? seenStoryRingColors : newStoryRingColors }>
                <View>
                    <View style={ isSeen ? styles.seenStoryBackdrop : styles.newStoryBackdrop}>
                        <Animated.View style={styles.storyImageContainer} >
                            <Image style={styles.storyImage}
                                source={{uri: uriMemo}}/>
                        </Animated.View>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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