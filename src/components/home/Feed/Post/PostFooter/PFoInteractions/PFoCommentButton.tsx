import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FiMessageCircle from '../../../../../icons/fi/FiMessageCircle'
import { useCommentSheetContext } from '../../../../../../context/CommentSheetContext'
import { useAppDispatch } from '../../../../../../lib/hooks';
import { setPostId } from '../../../../../../lib/features/commentsSheet/commentSheetSlice';
import { usePostContext } from '../../../../../../context/PostContext';

export default function PFoCommentButton() 
{
    const { id } = usePostContext();

    const { sheetModalRef } = useCommentSheetContext();
    const dispatch = useAppDispatch();

    const handlePress = () =>
    {     
        dispatch(setPostId(id));
        sheetModalRef.current?.present();
    }   

    return (
            <TouchableOpacity onPress={handlePress} style={styles.iconButton}>
                <View style={styles.iconContainer}>
                    <FiMessageCircle color={'white'}/>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        padding: 7,
        transform: [{scaleX: -1}],
    },
    iconContainer: {
        width: 28,
        height: 28,
    },
})