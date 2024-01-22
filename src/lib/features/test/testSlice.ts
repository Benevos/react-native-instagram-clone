import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    gretting: 'Hello from Redux!',
}

export const themeSlice = createSlice({
    name: 'test',
    initialState: initalState,
    reducers: {
        changeMessage: (state, action) =>
        {
            state.gretting = action.payload;
        }
    }
})

export const { changeMessage } = themeSlice.actions; 
export default themeSlice.reducer;