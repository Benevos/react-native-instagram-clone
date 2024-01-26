import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


interface pFoDescriptionType {
    username: string,
}

export default function PFoDescription(props: pFoDescriptionType) 
{ 
    const { username } = props;
    return (
        <View>
            <Text>{username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})