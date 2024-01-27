import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PostUserData from './PostUserData';
import HiDotsVertical from '../../../../icons/hi/HiDotsVertical';



export default function PostHeader() 
{
    return (
        <View style={styles.header}>
            <PostUserData/>
            
            <View style={styles.iconContainer}>
                <HiDotsVertical style={styles.icon} color={'white'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    iconContainer: {
        width: 17,
        height: 17,
    },
    icon: {
        width: '100%',
        height: '100%',
    }
});