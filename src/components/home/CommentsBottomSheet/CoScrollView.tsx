import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { useAppSelector } from '../../../lib/hooks'
import uuid from 'react-native-uuid'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import CoComment from './CoComment'
import { Comment } from '../../../types/post'

interface CoScrollViewProps {
    comments: Comment[]
}

export default function CoScrollView(props: CoScrollViewProps) 
{
    const { comments } = props;

    const [stupidState, setStupidState] = useState(false) //! For some reason if the component isnt rerendered scrollview does not work
    const [limit, setLimit] = useState(10);

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    }

    const handleScroll = ({nativeEvent})=>{
        if(isCloseToBottom(nativeEvent)){
           //setLimit(prev => prev+5);
        }
    }

    useEffect(() => {
        setStupidState(!stupidState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <BottomSheetScrollView onScroll={handleScroll} 
                               showsVerticalScrollIndicator={true} contentContainerStyle={styles.contentContainer}>
            
            {comments.slice(0,limit).map((comment) => <CoComment key={uuid.v4() as string}
                                                  body={comment.body}
                                                  username={comment.username}
                                                  reactions={comment.reactions}/>)}

        </BottomSheetScrollView>
    )
}

const styles = StyleSheet.create({
    contentContainer:
    {
        paddingTop: 40,
        paddingHorizontal: 13,
        paddingBottom: 150,
    }
})