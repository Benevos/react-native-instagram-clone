import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    postId: 0,
}

export const commentsSlice = createSlice({
    name: 'commentsSheet',
    initialState: initalState,
    reducers: {
        setPostId: (state, action) =>
        {
            state.postId = action.payload;
        }
    }
})

export const { setPostId } = commentsSlice.actions; 
export default commentsSlice.reducer;