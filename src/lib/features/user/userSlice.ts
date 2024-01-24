import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    uri: 'https://xsgames.co/randomusers/assets/avatars/female/61.jpg',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initalState,
    reducers: {
        changeUri: (state, action) =>
        {
            state.uri = action.payload;
        }
    }
})

export const { changeUri } = themeSlice.actions; 
export default themeSlice.reducer;