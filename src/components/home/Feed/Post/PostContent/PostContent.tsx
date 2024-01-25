import { View, Text, Dimensions, StyleSheet, Animated } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';
import PostCarouselItem from './PostCarouselItem';

const windowDimensions = Dimensions.get('screen');

interface postContentType {
    data?: (any)[],
    RenderItem?: (props?: any) => React.JSX.Element,
}

export default function PostContent(props: postContentType) 
{
    const { data, RenderItem } = props;

    const [imageIndex, setImageIndex] = useState(0);
    const [prevImageIndex, setPrevImageIndex] = useState(0);
    const [lastSnapTime, setLastSnapTime] = useState(Date.now());

    const fadeAnimation = useRef(new Animated.Value(0)).current;

    const getRandomNumber = (min: number, max: number) => {return Math.random() * (max - min) + min;}

    const number = useMemo(() => parseInt(getRandomNumber(1,3).toFixed(0)), []);

    const dataMemo = useMemo(() => {
        if(data) { return data; }
        return [...Array(number).keys()];
    }, [data, number])

    const fadeOut = useCallback(async () =>
    {
        if(Date.now() - lastSnapTime < 25000) { return; }

        Animated.timing( fadeAnimation, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
        }).start();
      
    }, [lastSnapTime, fadeAnimation])

    const handleSnapToItem = (index: number) =>
    {
        setLastSnapTime(Date.now());
        setImageIndex(prev => {
            setPrevImageIndex(prev);
            return index;
        });
        animateFade();
    }

    const animateFade = () =>
    {
        Animated.timing( fadeAnimation, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
        }).start();
    }

    useEffect(() =>
    {
        if(prevImageIndex === imageIndex) { return; }
        if(dataMemo.length <= 1) { return; }
        
        const fadeOutInterval = setInterval(fadeOut, 1500);
        return () => {
            clearInterval(fadeOutInterval);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageIndex]);


    return (
        <View style={sytles.container}>
            <Carousel
                loop={false}
                width={windowDimensions.width}
                height={windowDimensions.width}
                autoPlay={false}
                data={dataMemo}
                scrollAnimationDuration={500}
                onSnapToItem={handleSnapToItem}
                renderItem={({ index }) => (
                    <PostCarouselItem index={index}/> 
                )}
            />

            <Animated.View style={[sytles.imageIndexContainer, { opacity: fadeAnimation }]}>
                <Text style={sytles.imageIndexIndicator}>{`${imageIndex+1}/${dataMemo.length}`}</Text>
            </Animated.View>
        </View>
    )
}

const sytles = StyleSheet.create({
    container: {
        position: 'relative',
        width: windowDimensions.width,
        height: windowDimensions.width,
    },
    imageIndexContainer: {
        opacity: 0,
        position: 'absolute',
        right: 12,
        top: 12,
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical: 6,
        paddingHorizontal: 11,
        borderRadius: 15,
    },
    imageIndexIndicator: {
        color: 'white',
        fontSize: 12.5,
        fontWeight: '500',
    }
});