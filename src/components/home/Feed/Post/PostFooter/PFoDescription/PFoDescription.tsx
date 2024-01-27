import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { usePostContext } from '../../../../../../context/PostContext';

export default function PFoDescription() 
{ 
    const { body, username } = usePostContext();
    
    const [isOpen, setIsOpen] = useState(false);
    const [length, setLenght] = useState(50);

    const handleMorePress = () =>
    {
        if(isOpen) { setLenght(50) }
        if(!isOpen) { setLenght(body.length) }
        setIsOpen(!isOpen);
    }   

    return (
        <View style={styles.container}>
            <Text style={styles.description}>
                <Text style={styles.username} onPress={() => console.log('')}>{username}</Text>
                {` ${body.length > 50 ? body.slice(0, length) : body}`}
                {body.length > 50 ? 
                    <Text style={styles.suspesive} onPress={handleMorePress}>{isOpen ? ' less' : '... more'}</Text> : <></>}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    username: {
        fontWeight: '500',
        color: 'white',
        lineHeight: 19,
    },
    description: {
        color: '#f2f2f2',
        fontWeight: '400',
    },
    suspesive: {
        color: 'gray'
    }
})