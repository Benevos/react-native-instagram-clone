import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useEffect, useMemo } from 'react'
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

export default function Feed() 
{
    const posts = useAppSelector(state => state.posts.posts);
    const dispatch = useAppDispatch();

    const postNumber = useMemo(() => 1,[]);

    const getRandomNumber = (min: number, max: number) => {return parseInt((Math.random() * (max - min) + min).toFixed(0));}

    const getDummyJsonPosts = async () => 
    {
        const totalPosts = 150;

        const skip = getRandomNumber(0, totalPosts - postNumber);
        const limit = getRandomNumber(skip, skip + postNumber);

        const res = await fetch(`https://dummyjson.com/posts?skip=${skip}&limit=${limit}`);
        const data: DummyJsonPosts = await res.json();

        return data
    }

    const getDummyJsonComments = async () => 
    {
        const totalComments = 100;

        const skip = getRandomNumber(0, totalComments);
        const limit = getRandomNumber(skip, totalComments);

        const res = await fetch(`https://dummyjson.com/comments?skip=${skip}&limit=${limit}`);
        const data: DummyJsonComments = await res.json();

        return data;
    }

    const getDummyJsonUsers = async () => 
    {
        const totalUsers = 100;
        const skip = getRandomNumber(0, totalUsers - postNumber);
        const limit = getRandomNumber(skip, skip + postNumber);

        const res = await fetch(`https://dummyjson.com/users?skip=${skip}&limit=${limit}`);
        const data: DummyJsonUsers = await res.json();

        return data;
    }

    const getLoremPicusmImageUri = async () => {
        const imageNumber = getRandomNumber(1, 3);
        const imagesUri = [...Array(imageNumber).keys()].map((key, index) =>
            `https://picsum.photos/300/300/?random&t="${new Date().getTime()}"`
        )
        return imagesUri;
    }
        
    const setNewPosts = async () => 
    {
        const dummyJsonPosts = await getDummyJsonPosts();
        const dummyJsonComments = await getDummyJsonComments();
        const dummyJsonUsers = await getDummyJsonUsers();
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

    useEffect(() => {
        setNewPosts();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ScrollView onScrollEndDrag={() => console.log('Stoped')} onScrollBeginDrag={() => console.log('Scrolling')} contentInsetAdjustmentBehavior="automatic" alwaysBounceVertical={true}>

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

