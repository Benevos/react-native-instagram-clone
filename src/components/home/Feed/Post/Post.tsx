import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'

import PostHeader from './PostHeader/PostHeader';
import Carousel from 'react-native-reanimated-carousel';
import PostCarouselItem from './PostCarouselItem';

interface postType {
    userPictureUri?: string,
    postContentUri?: string,
    username?: string,
    date?: string,
    likes?: number,
    description?: string,
    comments?: (string)[],
}

const windowDimensions = Dimensions.get('screen');

export default function Post(props: postType) 
{
    const { userPictureUri, username } = props;

    const getRandomNumber = (min: number, max: number) => {return Math.random() * (max - min) + min;}
    const number = useMemo(() => parseInt(getRandomNumber(1,5).toFixed(0)), []);

    const data = [...Array(number).keys()];


    return (
        <View style={styles.container}>
            <PostHeader userPictureUri={userPictureUri} username={username}/>

            <Carousel
                loop={false}
                width={windowDimensions.width}
                height={windowDimensions.width}
                autoPlay={false}
                data={data}
                scrollAnimationDuration={500}
                
                renderItem={({ index }) => (
                    <PostCarouselItem index={index}/>
                )}
            />
    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});

    /* const [dimensions, setDimensions] = useState(windowDimensions);

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
          'change',
          ({window}) => {
            setDimensions(window);
          },
        );
        return () => subscription?.remove();
    }); */