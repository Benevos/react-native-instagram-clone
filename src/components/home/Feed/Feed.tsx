import { View, Text, ScrollView, StyleSheet, Image, NativeSyntheticEvent, NativeScrollEvent, Easing, Animated } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import Stories from '../Stories/Stories'
import Post from './Post/Post'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks'
import { DummyJsonPosts } from '../../../types/dummyJsonPosts'
import { DummyJsonComments } from '../../../types/dummyJsonComments'
import { DummyJsonUsers, User } from '../../../types/dummyJson.Users'
import { Post as PostType } from '../../../types/post'
import { setPosts } from '../../../lib/features/posts/postsSlice'
import PostProvider from '../../../context/PostContext'
import uuid from 'react-native-uuid';
import { ReduceMotion, SharedValue, useAnimatedReaction, withTiming } from 'react-native-reanimated'
import getRandomNumber from '../../../utils/get-random-number'
import { getDummyJsonComments, getDummyJsonPosts, getDummyJsonUsers, getLoremPicusmImageUri } from '../../../utils/external-api-getters'

interface FeedProps {
    scrollY: Animated.Value,
    opacity: SharedValue<number>,
}

export default function Feed(props: FeedProps) 
{
    const { scrollY, opacity } = props;
    
    const posts = useAppSelector(state => state.posts.posts);
    const dispatch = useAppDispatch();

    const postNumber = useMemo(() => 3,[]);

        
    const setNewPosts = async () => 
    {
        const dummyJsonPosts = await getDummyJsonPosts(postNumber);
        const dummyJsonComments = await getDummyJsonComments();
        const dummyJsonUsers = await getDummyJsonUsers(postNumber);
        const content = await getLoremPicusmImageUri();

        const newPosts: PostType[] = [...Array(postNumber).keys()].map((key, index) => 
        {
            const post: PostType = {
                id: dummyJsonPosts.posts[index].id,
                body: dummyJsonPosts.posts[index].body,
                comments: dummyJsonComments.comments.map((comment) =>
                {
                    const newComment = {
                        id: comment.id,
                        username: comment.user.username,
                        body: comment.body,
                        reactions: getRandomNumber(1, 10)%9 === 0 ? getRandomNumber(3000,6000) : getRandomNumber(0, 10),
                    }

                    return newComment;
                }),
                reactions: getRandomNumber(0, 999999999),
                username: dummyJsonUsers.users[index].username,
                content: content,
            }

            return post;
        });

        dispatch(setPosts(newPosts));
    }

    
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => 
    {
        scrollY.setValue(event.nativeEvent.contentOffset.y);
    };

    useEffect(() => {
        setNewPosts();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ScrollView style={styles.scrollView}  onScroll={handleScroll} contentContainerStyle={styles.contentContainer}
        contentInsetAdjustmentBehavior="automatic" alwaysBounceVertical={true}>

            <Stories/>

            {posts.map( post => 
                <PostProvider key={uuid.v4() as string}
                              body={post.body}
                              comments={post.comments}
                              content={post.content}
                              id={post.id}
                              reactions={post.reactions}
                              username={post.username}>
                    <Post/>
                </PostProvider>
            )}
            
       
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        zIndex: 1,
    },
    contentContainer: {
        zIndex: 2,
        paddingTop: 55,
    }
})