import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    upperBarSharedStyles: {
        opacity: 0,
        top: 0,
    }
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {

    }
})


export default uiSlice.reducer