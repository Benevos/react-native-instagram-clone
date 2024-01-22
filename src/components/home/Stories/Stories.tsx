import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import StoryButton from './StoryButton';
import UserStoryButton from './UserStoryButton';




export default function Stories() 
{
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={storiesStyles.container}>
                <View style={storiesStyles.elementsContiner}>

                     {/* Here you can call an API to get and iterate over use data */}

                    <UserStoryButton seen={true} uri="https://xsgames.co/randomusers/assets/avatars/female/61.jpg"/>
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

const storiesStyles = StyleSheet.create({
    
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