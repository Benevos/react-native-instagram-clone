import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomSheetFooter, TouchableOpacity } from '@gorhom/bottom-sheet'
import { TextInput } from 'react-native-gesture-handler'
import RiEmojiStickerLine from '../../icons/ri/RiEmojiStickerLine';
import { useAppSelector } from '../../../lib/hooks';

interface CoFooterProps {
    username: string,
    animatedFooterPosition: any,
}

export default function CoFooter(props: CoFooterProps) 
{
    const { username } = props;
    const userPictureUri = useAppSelector(state => state.user.uri);

    return (
        <BottomSheetFooter {...props}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.userPictureButton}>
                    <View>
                        <Image style={styles.userPicture} source={{uri: userPictureUri}}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.textInputContainer}>
                    <TextInput placeholder={`Add a comment${username ? ` for ${username}` : ``}...`}/>
                </View>
                <TouchableOpacity style={styles.iconButton}>
                    <View>
                        <RiEmojiStickerLine style={styles.icon} color={'white'}/>
                    </View>
                </TouchableOpacity>
            </View>
        </BottomSheetFooter>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#2a2a2a',
        width: '100%'
    },
    textInputContainer: {
        flexGrow: 1,
        height: 50,
    },
    iconButton: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
    },
    userPictureButton: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
    },
    userPicture: {
        width: 40,
        height: 40,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: 'rgba(126,126,126,0.5)',
    },
    icon: {
        width: 30,
        height: 30
    }
})