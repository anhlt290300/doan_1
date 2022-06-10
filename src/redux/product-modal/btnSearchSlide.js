import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

export const btnSearchSlide = createSlice({
    name:'btnSearch',
    initialState,
    reducers:{
        hover: (state) =>{
            state.value = true
        },
        remove: (state) =>{
            state.value = false
        }
    }
})

export const {hover,remove} = btnSearchSlide.actions

export default btnSearchSlide.reducer