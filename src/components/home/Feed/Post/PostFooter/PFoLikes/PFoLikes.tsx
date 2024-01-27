import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PFoFollowedLikes from './PFoFollowedLikes';
import { usePostContext } from '../../../../../../context/PostContext';

export default function PFoLikes() 
{
    const { reactions } = usePostContext(); 

    const [followedUsernames, setFollowedUsernames] = useState<string[]>([]);

    const getRandomNumber = (min: number, max: number) => {return parseInt((Math.random() * (max - min) + min).toFixed(0))}
    
    const commafy = (number: number) => 
    {
        const string = number.toString().split('.');
        if (string[0].length >= 5) { string[0] = string[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,'); }
        if (string[1] && string[1].length >= 5) { string[1] = string[1].replace(/(\d{3})/g, '$1 '); }
        return string.join('.');
    }

    const getFollowedUsernames = async () => 
    {
        const newFollowedUsernames: (string)[] = [];

        //if(likesUsernames) { /* return */ } //? get user followed list and filter*/ 
        
        const dummyArray = [...Array(getRandomNumber(0, reactions && reactions <= 3 ? reactions : 3)).keys()]

        for(let i=0; i < dummyArray.length; i++)
        {
            const number = getRandomNumber(1, 78)
            const res = await fetch('https://dummyjson.com/users/'+number)
            const data = await res.json();
            newFollowedUsernames.push(data.username);
        }

        setFollowedUsernames(newFollowedUsernames);
    }

    useEffect(() => {
        getFollowedUsernames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(reactions === 0)
    {
        return <></>
    }

    return (
        <TouchableOpacity style={styles.container}>
            { followedUsernames.length <= 0 ? 
                <View style={styles.likesContainer}>
                    <Text style={styles.oneLike}>{`${commafy(reactions)} like${reactions > 1 ? 's' : ''}`}</Text>
                </View>
                :
                <>
                    <PFoFollowedLikes likes={reactions}/>
                    <View style={styles.likesContainer}>
                        <Text style={styles.likes}>
                            <Text style={styles.username}>{`${followedUsernames[followedUsernames.length - 1]}`}</Text>

                            {  reactions - 1 > 0 ?
                                <Text>                            
                                {' and ' }  
                                    <Text style={styles.username}>{`${commafy(reactions - 1)}`}</Text>
                                {` other${reactions-1 <= 1 ? '' : 's'}`}
                                </Text> : <></>
                            }

                            {` likes this`}
                        </Text>
                    </View>
                </>
            }
            
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center',
        paddingHorizontal: 17,
    },
    likesContainer: {
        flexGrow: 1,
        paddingRight: 50,
    },
    username:{
        color: 'white',
        fontWeight: '500',
        fontSize: 14,
    },
    likes: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14,
    },
    oneLike: {
        color: 'white',
        fontWeight: '500',
        fontSize: 14,
    }
})