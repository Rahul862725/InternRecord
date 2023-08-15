import { createSlice } from "@reduxjs/toolkit";

const Articles=createSlice({
    name:"articles",
    initialState:[],
    reducers:{
        setArticle:(state,action)=>{
            return action.payload
        }
    }
})

export default Articles.reducer
export const {setArticle}=Articles.actions