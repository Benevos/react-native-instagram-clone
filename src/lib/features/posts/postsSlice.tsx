import { createSlice } from "@reduxjs/toolkit";

interface postType {
    userPictureUri?: string,
    postContentUri?: (string)[],
    username?: string,
    date?: string,
    likes?: number,
    description?: string,
    comments?: (string)[],
    liked?: boolean,
    saved?: boolean,
}

const posts: (postType)[] = [];

const initalState = {
    posts: posts,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initalState,
    reducers: {
        addPosts: (state, action) =>
        {
            state.posts.push(action.payload);
        }
    }
})

export const { addPosts } = themeSlice.actions; 
export default themeSlice.reducer;