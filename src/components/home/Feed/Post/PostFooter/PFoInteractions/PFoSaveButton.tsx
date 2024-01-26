import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FaBookmark from '../../../../../icons/fa6/FaBookmark'

interface pFoSavedButtonType {
    saved?: boolean
}

export default function PFoSaveButton(props: pFoSavedButtonType) 
{
    const { saved } = props;
    
    return (
        <TouchableOpacity style={styles.iconButton}>
            <View style={styles.icon}>
                <FaBookmark color={'white'}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        padding: 7,
        paddingRight: 16,  
    },
    icon: {
        width: 22,
        height: 22,
    }
})