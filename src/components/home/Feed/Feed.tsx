import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useMemo } from 'react'
import Stories from '../Stories/Stories'
import Post from './Post/Post'



export default function Feed() 
{
    

    return (
        <ScrollView onScrollEndDrag={() => console.log('Stoped')} onScrollBeginDrag={() => console.log('Scrolling')} contentInsetAdjustmentBehavior="automatic">

            <Stories/>

            <Post/>
            
        </ScrollView>
    )
}

