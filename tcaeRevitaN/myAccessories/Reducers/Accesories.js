import { createSlice } from "@reduxjs/toolkit";

const SelectAccessoriesType=createSlice({
    name:"options",
    initialState:3,
    reducers:{
        setOption:(state,action)=>{
            return action.payload
        }
    }
})

export default SelectAccessoriesType.reducer
export const {setOption}=SelectAccessoriesType.actions