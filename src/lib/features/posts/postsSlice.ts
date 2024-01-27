import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../types/post";

const posts: Post[] = [];

const initalState = {
    posts: posts
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState: initalState,
    reducers: {
        setPosts: (state, action) =>
        {
            state.posts = action.payload
        },
        pushPosts: (state, action) =>
        {
            state.posts.push(...action.payload);
        }
    },
})

export const { setPosts, pushPosts } = postsSlice.actions;
export default postsSlice.reducer;