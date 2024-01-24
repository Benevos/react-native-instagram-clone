import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import StoryButton from './StoryButton';
import UserStoryButton from './UserStoryButton';
import { useAppSelector } from '../../../lib/hooks';




export default function Stories() 
{
    const userPictureUri = useAppSelector(state => state.user.uri);

    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.container}>
                <View style={styles.elementsContiner}>

                     {/* Here you can call an API to get and iterate over use data */}

                    <UserStoryButton seen={true} uri={userPictureUri}/>
                    <StoryButton seen={false}/>
                    <StoryButton seen={false}/>
                    <StoryButton seen={true}/>
                    <StoryButton seen={true}/>
                    <StoryButton seen={true}/>

                </View>                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 120,
    },
    elementsContiner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        height: 100
    }
});