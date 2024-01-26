import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'

import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent/PostContent';
import PostFooter from './PostFooter/PostFooter';


interface postType {
    userPictureUri?: string,
    postContentUri?: (string)[],
    username?: string,
    date?: string,
    likes?: number,
    description?: string,
    comments?: (string)[],
    liked?: boolean,
    saved?: boolean,
}

const windowDimensions = Dimensions.get('screen');

export default function Post(props: postType) 
{
    const { userPictureUri, username, liked, saved, likes } = props;

    const [usernameState, setUsernameState] = useState<string>('Loading...');

    const getRandomNumber = (min: number, max: number) => {return parseInt((Math.random() * (max - min) + min).toFixed(0));}

    const getRandomUsername = async () =>
    {
      if(username) { setUsernameState(username); return; }
      const res = await fetch('https://dummyjson.com/users/'+getRandomNumber(0, 78));
      const data = await res.json();
      setUsernameState(data.username);
    }

    useEffect(() => 
    {
        getRandomUsername();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <View style={styles.container}>
            <PostHeader userPictureUri={userPictureUri} username={usernameState}/>

            <PostContent/>

            <PostFooter likes={likes} liked={liked} saved={saved} username={usernameState}/>
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