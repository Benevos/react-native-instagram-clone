import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PFoDate() 
{
    return (
        <View style={styles.container}>
            <Text style={styles.date}>19 hours ago</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2,
        paddingHorizontal: 20,
    },
    date: {
        fontSize: 12,
    }
})