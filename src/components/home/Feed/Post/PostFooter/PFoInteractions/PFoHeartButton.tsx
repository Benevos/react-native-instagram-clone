import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AiOutlineHeart from '../../../../../icons/ai/AiOutlineHeart'

interface pFoHeartButtonType {
    liked?: boolean
}

export default function PFoHeartButton(props: pFoHeartButtonType) 
{
    const { liked } = props;

    return (
            <TouchableOpacity style={styles.iconButton}>
                <View style={styles.iconContainer}>
                    <AiOutlineHeart color={'white'}/>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        padding: 7,
    },
    iconContainer: {
        width: 30,
        height: 30,
    },
})