import { View, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useMemo } from 'react'
import { ImageZoom } from '@likashefqet/react-native-image-zoom';
import { useSharedValue } from 'react-native-reanimated';

const windowDimensions = Dimensions.get('screen');

interface postCarouselItemType {
    index?: number,
    imageUri?: string,
}

export default function PostCarouselItem(props: postCarouselItemType) 
{   
    const { imageUri, index } = props;

    const seed = useMemo(() => new Date().getTime(), []);

   

    return (
        <View style={sytles.container}>
            <ImageZoom style={sytles.image} 
                resizeMode="contain" 
                source={{uri: imageUri ? imageUri : `https://picsum.photos/300/300/?random&t="${seed}"`}}/>
        </View>
    )
}

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        zIndex: 8,
    },
    image: {
        aspectRatio: 1,
        width: windowDimensions.width,
        height: '100%',
    }
})