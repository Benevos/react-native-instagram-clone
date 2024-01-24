import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../../lib/hooks'

interface abAccountButtonType {
    newNotification?: boolean,
}

export default function AbAccountButton(props: abAccountButtonType ) 
{
    const { newNotification } = props;
    const userPictureUri = useAppSelector(state => state.user.uri);

    //TODO: handle route navigation
    return (
            <TouchableOpacity style={styles.container}>
                 <View style={styles.imageRingUnselected}/>  

                 { newNotification ? <View style={styles.notificationDot}/> : <></> }

                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: userPictureUri}}/>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        height: '100%',
    },
    notificationDot: {
        position: 'absolute',
        bottom: 3,
        width: 5,
        height: 5,
        borderRadius: 999,
        backgroundColor: 'red',
    },
    imageRingSelected: {
        position: 'absolute',
        width: 31,
        height: 31,
        backgroundColor: 'white',
        borderRadius: 999,
    },
    imageRingUnselected: {
        position: 'absolute',
        width: 29,
        height: 29,
        backgroundColor: 'rgba(126,126,126,0.7)',
        borderRadius: 999,
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        width: 28,
        height: 28,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 999,
    }
})