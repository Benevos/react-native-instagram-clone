import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import BottomSheet, { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { useCommentSheetContext } from '../../../context/CommentSheetContext';
import CoFooter from './CoFooter';
import CoScrollView from './CoScrollView';
import { useAppSelector } from '../../../lib/hooks';

export default function CommentsBottomSheet() 
{
    const { sheetModalRef } = useCommentSheetContext();
    
    const postId: number = useAppSelector(state => state.comments.postId);
    const posts = useAppSelector(state => state.posts.posts).filter(post => post.id === postId);
    const sortedComments = postId !== 0 ? [...posts[0].comments].sort((a, b) => b.reactions - a.reactions) : [];

    const snapPoints = useMemo(() => ["20%", "50%", "100%"], []);
    
    const handleSheetChange = useCallback((index: number) =>
    {
        if(index === 0) { sheetModalRef.current?.close() }
    }, [sheetModalRef])

    const renderFooter = useCallback((props) => 
        <CoFooter username={postId !== 0 ? posts[0].username : ''} {...props}/>
    , [postId, posts]);

    const renderBackrop = useCallback((props) => <BottomSheetBackdrop {...props}/>,[]);

    return (
        
        <BottomSheetModal
        ref={sheetModalRef}
        index={2}
        backdropComponent={renderBackrop}
        snapPoints={snapPoints}
        footerComponent={renderFooter}
        onChange={handleSheetChange}
        backgroundStyle={styles.background}
        handleIndicatorStyle={styles.handleIndicator}
        animationConfigs={{
            duration: 300,
            
        }}>
            <BottomSheetView style={styles.header}>
                <Text style={styles.headerText}>Comments</Text>
            </BottomSheetView>

            <BottomSheetView style={styles.container}>
                
                { sortedComments.length <= 0 ? <></> :
                    <CoScrollView comments={sortedComments}/>
                }

            </BottomSheetView>
        </BottomSheetModal>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#2a2a2a'
    },
    handleIndicator: {
        backgroundColor: '#a7a7a7',
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#2a2a2a',
        position: 'relative',
    },
    makeComment: {
        width: '100%',
        height: 50,
        backgroundColor: 'green',
    },
    header: {
        paddingTop: 20,
        display: 'flex',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(126,126,126,0.2)',
    },
    headerText: {
        paddingBottom: 15,
        color: 'white',
        fontWeight: '600'
    }
})