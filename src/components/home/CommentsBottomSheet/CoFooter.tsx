import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomSheetFooter } from '@gorhom/bottom-sheet'
import { TextInput } from 'react-native-gesture-handler'

export default function CoFooter(props) 
{
    return (
        <BottomSheetFooter {...props}>
            <View style={styles.container}>
                <TextInput placeholder="Add a comment"/>
            </View>
        </BottomSheetFooter>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'green'
    }
})