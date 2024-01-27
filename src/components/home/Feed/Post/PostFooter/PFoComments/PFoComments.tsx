import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PFoPrevComment from './PFoPrevComment';
import { useCommentSheetContext } from '../../../../../../context/CommentSheetContext';
import { useAppDispatch } from '../../../../../../lib/hooks';
import { changeComments } from '../../../../../../lib/features/commentsSheet/commentSheetSlice';
import { usePostContext } from '../../../../../../context/PostContext';

export default function PFoComments() 
{
    const { comments } = usePostContext();

    const { sheetModalRef } = useCommentSheetContext()

    const dispatch = useAppDispatch();

    const handlePress = () =>
    {
        dispatch(changeComments(comments));
        sheetModalRef.current?.present();
    }

    const mostReacted = comments.reduce((prev, current) => {
        return current.reactions  > prev.reactions ? current : prev;
    }, comments[0])

    if(comments.length <= 0) { return <></>; }



    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} style={styles.button}>
                <Text>{`View ${comments.length <= 1 ? '' : 'all'} ${comments.length} comment${comments.length <= 1 ? '' : 's'}`}</Text>
            </TouchableOpacity>

            { !mostReacted || mostReacted.reactions < 2500 ? <></> :
                
                <PFoPrevComment comment={mostReacted}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        marginTop: 2,
    },
    button: {
        width: '100%',
        paddingHorizontal: 20,
    },
    prevCommentContainer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingRight: 40,
    },
    username: {
        fontWeight: '500',
        color: 'white',
        lineHeight: 19,
    },
    comment: {
        color: '#f2f2f2',
        fontWeight: '400',
    },
    suspesive: {
        color: 'gray'
    }
})