import { View, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useMemo } from 'react'

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
            <Image style={sytles.image}
                resizeMode="contain" 
                source={{uri: imageUri ? imageUri : `https://picsum.photos/300/300/?random&t="${seed}"`}}/>
        </View>
    )
}

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
       
    },
    image: {
        aspectRatio: 1,
        width: windowDimensions.width,
        height: '100%'
    }
})