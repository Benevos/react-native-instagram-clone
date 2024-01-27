import { createSlice } from "@reduxjs/toolkit";

const commments: any[] = []; 

const initalState = {
    comments: commments,
}

export const commentsSlice = createSlice({
    name: 'commentsSheet',
    initialState: initalState,
    reducers: {
        changeComments: (state, action) =>
        {
            state.comments = action.payload;
        }
    }
})

export const { changeComments } = commentsSlice.actions; 
export default commentsSlice.reducer;