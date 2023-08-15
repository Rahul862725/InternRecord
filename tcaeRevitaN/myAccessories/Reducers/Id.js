import { createSlice } from "@reduxjs/toolkit";

const StoreId=createSlice({
    name:"id",
    initialState:0,
    reducers:{
        setId:(state,action)=>{
            return action.payload;
        }
    }
})

export default StoreId.reducer;
export const {setId}=StoreId.actions