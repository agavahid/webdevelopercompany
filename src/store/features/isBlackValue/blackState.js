import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isBlack : true,
}
export const isBlackHandler = createSlice({
    name : 'black',
    initialState,
    reducers : {
        setBlackMode: (state) => {
            state.isBlack = !state.isBlack
        },
    }
})

export const { setBlackMode } = isBlackHandler.actions;
export default isBlackHandler.reducer