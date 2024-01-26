import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import uuid from 'react-native-uuid';

interface pFoFollowedLikesType {
    usernames?: string[], 
    likes?: number
}

export default function PFoFollowedLikes(props: pFoFollowedLikesType) 
{
    const { usernames, likes } = props;

    if(usernames && usernames.length > 3) { throw new Error('Can only contain 3 usernames') }

    const [picturesUri, setPicturesUri] = useState<string[]>([]);

    const getRandomNumber = (min: number, max: number) => {return parseInt((Math.random() * (max - min) + min).toFixed(0))}

    const getFollowedLikesInfo = async () =>
    {
        let followedPicturesUri: (string)[];
        const followedUsernames: (Promise<any>)[] = [];

        if(usernames) 
        {
            //? Get user followed list usernames and return coincident names 
            //? return {followedPictureUri, followedUsernames};
        } 
        
        const dummyArray = [...Array(getRandomNumber(1, likes && likes <= 3 ? likes : 3)).keys()];
        console.log(dummyArray);
        
        followedPicturesUri = dummyArray.map(() => 
            {
                const number = getRandomNumber(1, 78)
                return `https://xsgames.co/randomusers/assets/avatars/${number % 2 === 0 ? 'male' : 'female'}/${number}.jpg`;
            }
        );
        
        for(let i=0; i < dummyArray.length; i++)
        {
            const number = getRandomNumber(1, 78)
            const res = await fetch('https://dummyjson.com/users/'+number)
            const data = await res.json();
            followedUsernames.push(data.username);
        }

        setPicturesUri(followedPicturesUri);
    }

    useEffect(() => {
        getFollowedLikesInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <View style={styles.container}>
            { picturesUri.map(uri => 
                <View key={uuid.v4() as string} style={styles.imageRing}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{uri: uri}}/>
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: -10,
    },
    imageRing: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 27,
        height: 27,
        backgroundColor: 'black',
        borderRadius: 999,
    },
    imageContainer: {
        width: 21,
        height: 21,
        borderRadius: 999,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 999
    }
})