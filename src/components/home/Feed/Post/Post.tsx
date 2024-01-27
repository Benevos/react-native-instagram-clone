import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'

import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent/PostContent';
import PostFooter from './PostFooter/PostFooter';




const windowDimensions = Dimensions.get('screen');

export default function Post() 
{    
    return (
        <View style={styles.container}>
            <PostHeader/>

            <PostContent/>

            <PostFooter/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 15,
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